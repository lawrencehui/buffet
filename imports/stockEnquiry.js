import { Conversations, StocksTable, PriceAlerts, Watchlist } from '/imports/collections.js'

function buildRegExp(searchText) {
  var words = searchText.trim().split(/[ \-\:]+/);
  var exps = _.map(words, function(word) {
    return "(?=.*" + word + ")";
  });
  var fullExp = exps.join('') + ".+";
  return new RegExp(fullExp, "i");
}

function checkIfStockExists(text) {
  var isNum = /^\d+$/.test(text);
  let selector;
  if(isNum) {
    selector = {'stockCode': parseInt(text)}
  } else {
    let regExp = buildRegExp(text);
    selector = {$or: [
      {'stockCn': regExp},
      {'stockEn': regExp}
    ]};
  }
  return StocksTable.find(selector).fetch();
}

export function stockEnquiryPostbackEntry({senderId, messagingEvent, conversation}) {
  let split = messagingEvent.postback.payload.split(".");
  console.log("stick Enquiry Postback");

  const branch = split[0];
  switch (branch) {
    case "SET_PRICE_ALERT":
      instructSetPriceAlert({senderId, stockCode: split[1]}).then((result) => {

      }).catch((err) => {
        console.log(err);

      })
      break;

    case "ADD_WATCHLIST":
      Watchlist.update({fbId: senderId}, {$addToSet: {list: split[1]}})
      watchlistAdded({senderId, stockCode: split[1]}).then(result => {
        stockEnquiryInstruction(senderId).then((result) => {

        }).catch((err) => {
          console.log(err);
        })
      }).catch(err => {
        console.log(err);
      })
      break;
    default:

  }
}

function instructSetPriceAlert({senderId, stockCode}) {
  const pageAccessToken = Meteor.settings.private.pageAccessToken
  return new Promise((resolve, reject)=>{
      let stockObj = StocksTable.findOne({stockCode: parseInt(stockCode)})
      HTTP.call("POST", 'https://graph.facebook.com/v2.6/me/messages?access_token=' + pageAccessToken,
      {
        data: {
          recipient: {
            id: senderId
          },
          message: {
            text: `Set a price alert for ${stockObj.stockEn}. I will notify you when the price gets there.`
          }
        }
      },
        (error, result)=>{
          if (!error) {
            Conversations.upsert({fbId: senderId}, {$set: {
              fbId: senderId,
              state: 'STOCK_ENQUIRY.3'
            }})
            resolve(result.data);
          }
          if (error){
            reject(error);
          }
      });
    }
  )
}

export function stockEnquiryEntry({senderId, messagingEvent, conversation}) {
  let split = conversation.state.split(".");
  const branch = split[1];
  const messageObj = messagingEvent.message
  switch (branch) {
    case "0": //Initial: asking for search
      let stocks = checkIfStockExists(messageObj.text)
      if (stocks.length === 0) {
        console.log("no stocks found");
        noResultFound({senderId, text: messageObj.text})
      } else if (stocks.length > 1) {
        console.log("more than 1 stocks are found");
        showSuggestions({senderId, stocks}).then((result)=> {

        }).catch((err)=> {
          console.log(err);

        })
      } else {
        console.log("found 1 match");
        let stockCode = stocks[0].stockCode
        showResult({stockCode, senderId})
      }
      break;

    case "1": // stocks found, displaying result

      break;

    case "2": // choosing stocks

      if (messageObj.quick_reply) {
        let stockCode = parseInt(messageObj.quick_reply.payload.replace("CHOOSEN_STOCK_", ""))
        showResult({stockCode, senderId})
      } else {
        let stocks = checkIfStockExists(messageObj.text)
        if (stocks.length === 0) {
          console.log("no stocks found");
          noResultFound({senderId, text: messageObj.text})
        } else if (stocks.length > 1) {
          console.log("more than 1 stocks are found");
          showSuggestions({senderId, stocks}).then((result)=> {

          }).catch((err)=> {
            console.log(err);

          })
        } else {
          console.log("found 1 match");
          let stockCode = stocks[0].stockCode
          showResult({stockCode, senderId})
        }
      }

      break;

    case "3": // setting price alert
      if (validatePriceText(messageObj.text) === false) {
        priceAlertInputError(senderId)
      } else {
        let price = validatePriceText(messageObj.text)
        let selectedStockCode = conversation.tempSelectedStock
        PriceAlerts.upsert({fbId: senderId}, {$set: {stockCode: selectedStockCode, price}})
        priceAlertSet({senderId, stockCode: selectedStockCode, price}).then((result) => {
          stockEnquiryInstruction(senderId).then((result) => {

          }).catch((err) => {
            console.log(err);
          })
        }).catch((err) => {
          console.log(err);
        })

      }

      break;

    default:

  }
}

function watchlistAdded({senderId, stockCode}) {
  const pageAccessToken = Meteor.settings.private.pageAccessToken
  return new Promise((resolve, reject)=>{
      let stockObj = StocksTable.findOne({stockCode: parseInt(stockCode)})
      HTTP.call("POST", 'https://graph.facebook.com/v2.6/me/messages?access_token=' + pageAccessToken,
      {
        data: {
          recipient: {
            id: senderId
          },
          message: {
            text: `OK. You have added (${leftZeroPad(stockCode.toString(), 5, '0')}) ${stockObj.stockEn} to your watchlist.`
          }
        }
      },
        (error, result)=>{
          if (!error) {
            resolve(result.data);
          }
          if (error){
            reject(error);
          }
      });
    }
  )
}
function priceAlertSet({senderId, stockCode, price}) {
  const pageAccessToken = Meteor.settings.private.pageAccessToken
  return new Promise((resolve, reject)=>{
      let stockObj = StocksTable.findOne({stockCode: parseInt(stockCode)})
      HTTP.call("POST", 'https://graph.facebook.com/v2.6/me/messages?access_token=' + pageAccessToken,
      {
        data: {
          recipient: {
            id: senderId
          },
          message: {
            text: `OK. Price alert is in place.\n(${leftZeroPad(stockCode.toString(), 5, '0')}) ${stockObj.stockEn} @ ${price}`
          }
        }
      },
        (error, result)=>{
          if (!error) {
            resolve(result.data);
          }
          if (error){
            reject(error);
          }
      });
    }
  )
}

function priceAlertInputError(senderId) {
  const pageAccessToken = Meteor.settings.private.pageAccessToken
  return new Promise((resolve, reject)=>{
      HTTP.call("POST", 'https://graph.facebook.com/v2.6/me/messages?access_token=' + pageAccessToken,
      {
        data: {
          recipient: {
            id: senderId
          },
          message: {
            text: `Sorry, the price you input is invalid. Please try again.`
          }
        }
      },
        (error, result)=>{
          if (!error) {
            resolve(result.data);
          }
          if (error){
            reject(error);
          }
      });
    }
  )
}

function validatePriceText(text) {
  let processedText = text.trim().replace("$", "")
  if (!isNaN(processedText) && processedText.indexOf('.') != -1) {
    let floatPrice = parseFloat(processedText)
    if (floatPrice < 0) {
      return false
    } else {
      return floatPrice
    }
  } else {
    return false
  }
}

function noResultFound({text, senderId}) {
  const pageAccessToken = Meteor.settings.private.pageAccessToken

  return new Promise((resolve, reject)=>{

      HTTP.call("POST", 'https://graph.facebook.com/v2.6/me/messages?access_token=' + pageAccessToken,
      {
        data: {
          recipient: {
            id: senderId
          },
          message: {
            text: `Sorry, I current cannot find any stocks matching ${text}. Please try again.`
          }
        }
      },
        (error, result)=>{
          if (!error) {
            Conversations.upsert({fbId: senderId}, {$set: {
              fbId: senderId,
              state: 'STOCK_ENQUIRY.0'
            }})
            resolve(result.data);
          }
          if (error){
            reject(error);
          }
      });
    }
  )
}

function showResult({stockCode, senderId}) {
  const pageAccessToken = Meteor.settings.private.pageAccessToken
  return new Promise((resolve, reject)=>{

    Meteor.call("getPriceSnippet", stockCode, (error, result) => {
      if (error) {
        console.log(error);
      } else {
        // let link = `${Meteor.absoluteUrl()}priceDetails/${result._id}`
        let link = `https://buffet.sanuker.com/priceDetails/${result._id}`

        HTTP.call("POST", 'https://graph.facebook.com/v2.6/me/messages?access_token=' + pageAccessToken,
        {
          data: {
            recipient: {
              id: senderId
            },
            message: {
              "attachment":{
                "type":"template",
                "payload":{
                  "template_type":"button",
                  "text":result.message,
                  "buttons":[
                    {
                      "title":"More Details...",
                      "type":"web_url",
                      "url":link,
                      "webview_height_ratio": "full"
                    },
                    {
                      "type":"postback",
                      "title":"Set Price Alert",
                      "payload":`SET_PRICE_ALERT.${stockCode}`
                    },
                    {
                      "type":"postback",
                      "title":"Add to Watchlist",
                      "payload":`ADD_WATCHLIST.${stockCode}`
                    }
                  ]
                }
              }
            }
          }
        },
          (error, result)=>{
            if (!error) {
              Conversations.upsert({fbId: senderId}, {$set: {
                fbId: senderId,
                state: 'STOCK_ENQUIRY.1',
                tempSelectedStock: stockCode
              }})
              resolve(result.data);
            }
            if (error){
              reject(error);
            }
        });
      }
    })

  })
}

function showSuggestions({senderId, stocks}) {
  const pageAccessToken = Meteor.settings.private.pageAccessToken

  return new Promise((resolve, reject)=>{
      let topResults = []
      if (stocks.length > 9) {
        topResults = stocks.slice(0, 9)
      } else {
        topResults = stocks
      }
      let quickReplies = _.map(topResults, (item, index, array)=> {
        let title;
        if (item.stockEn.length >= 20) {
          title = item.stockEn.substring(0, 16) + "..."
        } else {
          title = item.stockEn
        }
        return {
          "content_type":"text",
          "title": title,
          "payload":"CHOOSEN_STOCK_" + item.stockCode.toString()
        }
      })

      HTTP.call("POST", 'https://graph.facebook.com/v2.6/me/messages?access_token=' + pageAccessToken,
      {
        data: {
          recipient: {
            id: senderId
          },
          message: {
            text: 'Are you looking for these stocks?',
            "quick_replies": quickReplies
          }
        }
      },
        (error, result)=>{
          if (!error) {
            Conversations.upsert({fbId: senderId}, {$set: {
              fbId: senderId,
              state: 'STOCK_ENQUIRY.2'
            }})
            resolve(result.data);
          }
          if (error){
            reject(error);
          }
      });
    }
  )
}

export function stockEnquiryInstruction(senderId) {
  const pageAccessToken = Meteor.settings.private.pageAccessToken

  return new Promise((resolve, reject)=>{
      HTTP.call("POST", 'https://graph.facebook.com/v2.6/me/messages?access_token=' + pageAccessToken,
      {
        data: {
          recipient: {
            id: senderId
          },
          message: {
            text: 'Which stocks you want to check? (Stock no./ Name)',
          }
        }
      },
        (error, result)=>{
          if (!error) {
            Conversations.upsert({fbId: senderId}, {$set: {
              fbId: senderId,
              state: 'STOCK_ENQUIRY.0'
            }})
            resolve(result.data);
          }
          if (error){
            reject(error);
          }
      });
    }
  )
}
