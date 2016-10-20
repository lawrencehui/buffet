import { Conversations, Watchlist } from '/imports/collections.js'
import { stockEnquiryInstruction, stockEnquiryEntry, stockEnquiryPostbackEntry } from '/imports/stockEnquiry'


function globalInitialPostback(postbackObj, senderId) {
  switch (postbackObj.payload) {
    case "START.STOCK_ENQUIRY":
      stockEnquiryInstruction(senderId).then((result) => {
        // console.log(result);
      }).catch((err)=> {
        // console.log(err);
      })
      break;
    case "START.WATCHLIST":
      showWatchList({senderId}).then((result) => {
        // console.log(result);
      }).catch((err)=> {
        console.log(err);
      })
      break;
    case "START.STOCK_ALERTS":
      showAlertList({senderId}).then((result) => {
        // console.log(result);
      }).catch((err)=> {
        console.log(err);
      })
      break;
    default:
      return false
  }
}

function showWatchList({senderId}) {
  const pageAccessToken = Meteor.settings.private.pageAccessToken

  return new Promise((resolve, reject)=>{
      // let link = `${Meteor.absoluteUrl()}watchList/${senderId}`
      let link = `https://buffet.sanuker.com/watchList/${senderId}`

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
                "text":"Here is your Watch List ...",
                "buttons":[
                  {
                    "title":"Watch List",
                    "type":"web_url",
                    "url": link,
                    "webview_height_ratio": "tall"
                  }
                ]
              }
            }
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

function showAlertList({senderId}) {
  const pageAccessToken = Meteor.settings.private.pageAccessToken

  return new Promise((resolve, reject)=>{
      // let link = `${Meteor.absoluteUrl()}alertList/${senderId}`
      let link = `https://buffet.sanuker.com/alertList/${senderId}`

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
                "text":"Here are your Stock Alerts ...",
                "buttons":[
                  {
                    "title":"Stock Alerts",
                    "type":"web_url",
                    "url": link,
                    "webview_height_ratio": "tall"
                  }
                ]
              }
            }
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

export function receivedPostback(messagingEvent) {
  const senderId = messagingEvent.sender.id
  const postbackObj = messagingEvent.postback

  let conversation = Conversations.findOne({fbId: senderId});
  if (!conversation) {
    let profile = getUserProfile(senderId).then((result) => {
      let firstName = result.first_name
      Conversations.insert({
        fbId: senderId,
        profile: result,
        state: 'INITIAL.0'
      })
      Watchlist.insert({
        fbId: senderId,
        list: []
      })
      globalInitialPostback(postbackObj, senderId)
    })
  } else {
    if (!globalInitialPostback(postbackObj, senderId)) {
      let dotIndex = conversation.state.indexOf(".");
      let branch = conversation.state.substring(0, dotIndex);
      switch (branch) {
        case "STOCK_ENQUIRY":
          stockEnquiryPostbackEntry({senderId, messagingEvent, conversation})
          break;
        default:
      }
    }
  }
}

export function receivedMessage(messagingEvent) {
  const senderId = messagingEvent.sender.id
  const messageObj = messagingEvent.message

  let conversation = Conversations.findOne({fbId: senderId});
  if (!conversation) {
    let profile = getUserProfile(senderId).then((result) => {
      let firstName = result.first_name
      Conversations.insert({
        fbId: senderId,
        profile: result,
        state: 'INITIAL.0'
      })
      Watchlist.insert({
        fbId: senderId,
        list: []
      })

      sendGreetings(senderId, firstName).then((result)=> {
        // console.log(result);
      }, (err) => {
        // console.log(err);
      })
    }, (err) => {
      // console.log(err);
    })
  } else {
    let dotIndex = conversation.state.indexOf(".");
    let branch = conversation.state.substring(0, dotIndex);
    switch (branch) {
      case "INITIAL":
        if (messageObj.quick_reply) {
          switch (messageObj.quick_reply.payload) {
            case "START.STOCK_ENQUIRY":
              stockEnquiryInstruction(senderId).then((result) => {
                // console.log(result);

              }).catch((err)=> {
                // console.log(err);

              })
              break;
            default:

          }
        } else {
          sendGreetings(senderId, conversation.profile.first_name).then((result)=> {
            // console.log(result);
          }, (err) => {
            // console.log(err);
          })
        }

        break;

      case "STOCK_ENQUIRY":
        stockEnquiryEntry({senderId, messagingEvent, conversation})
        break;

      // case "INITIAL":
      //
      //   break;
      default:

    }
  }
}

function sendGreetings(senderId, firstName) {

  const pageAccessToken = Meteor.settings.private.pageAccessToken

  // let watchListlink = `${Meteor.absoluteUrl()}watchList/${senderId}`
  let watchListlink = `https://buffet.sanuker.com/watchList/${senderId}`
  // let alertListlink = `${Meteor.absoluteUrl()}alertList/${senderId}`
  let alertListlink = `https://buffet.sanuker.com/alertList/${senderId}`

  return new Promise((resolve, reject)=>{
      HTTP.call("POST", 'https://graph.facebook.com/v2.6/me/messages?access_token=' + pageAccessToken,
      {
        data: {
          recipient: {
            id: senderId
          },
          message: {
            attachment: {
              type: "template",
              payload: {
                template_type: "button",
                text: `Greetings! ${firstName}. What would you like to do?`,
                buttons: [
                  {
                    "title":"Stock Enquiry",
                    "type":"postback",
                    "payload":"START.STOCK_ENQUIRY"
                  },
                  {
                    "type":"web_url",
                    "url": watchListlink,
                    "title":"Watch List",
                    "webview_height_ratio": "tall"
                  },
                  {
                    "type":"web_url",
                    "url": alertListlink,
                    "title":"Stock Alerts",
                    "webview_height_ratio": "tall"
                  }
                ]
              }
            }
          }
        }
      },
        (error, result)=>{
          if (!error) {
            resolve(result.data);
          }
          if (error){
            console.log(error);

            reject(error);
          }
      });
    }
  )
}

export function getUserProfile(senderId) {
  const pageAccessToken = Meteor.settings.private.pageAccessToken

  return new Promise((resolve, reject)=>{
      HTTP.call("GET", 'https://graph.facebook.com/v2.6/' + senderId + '?access_token=' + pageAccessToken,
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
