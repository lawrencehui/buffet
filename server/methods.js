import { StocksTable, Watchlist, PriceAlerts } from '/imports/collections'

Meteor.methods({

  updateWatchlist({fbId, item}) {
    let list = Watchlist.findOne({fbId}).list
    let newList = _.reject(list, (obj) => {
      return parseInt(obj) === parseInt(item)
    })
    Watchlist.update({fbId}, {$set: {
      list: newList
    }})
  },
  updateAlertlist({_id}) {

    PriceAlerts.remove({_id})
  },

  getPriceDetailsObj({_id}) {

    return PriceDetails.findOne({_id})
  },

  getPriceSnippet(tickerInput){
    dbStockData = StocksTable.findOne({stockCode: parseInt(tickerInput) });

    let tickerId = leftZeroPad(tickerInput, 5, "0");

    this.unblock();

    try {
      //fetch open price
      var open_result = HTTP.call("GET", "http://money18.on.cc/js/real/hk/opening/" + tickerId + "_o.js?t=1474160067979",
                                  // { headers : {
                                  //     'Content-Type': 'application/json'
                                  //   }
                                  // }
                                  {}
                                 );
      let open_price = open_result.content;

      open_price = open_price.substring(12, open_price.length-2);

      // console.log(open_price);
      let cleanData = open_price.replace(/\\n/g, "")
                            .replace(/\\"/g, '')
                            .replace(/\\&/g, "")
                            .replace(/\\r/g, "")
                            .replace(/\\t/g, "")
                            .replace(/\\b/g, "")
                            .replace(/\\f/g, "")
                            .replace(/'/gm,'"');

      let openPrc = JSON.parse(cleanData);

      console.log('open_price', openPrc.openPrice);

      //fetching price details
      var details_result = HTTP.call("GET", "http://money18.on.cc/js/daily/hk/quote/" + tickerId + "_d.js?t=1474142751917",
                              {}
                            );
      // console.log(details_result);
      let raw_result = details_result.content;
      raw_result = raw_result.substring(13, raw_result.length-1);

      let priceDetailsData = raw_result.replace(/\\n/g, "")
                            .replace(/\\"/g, '')
                            .replace(/\\&/g, "")
                            .replace(/\\r/g, "")
                            .replace(/\\t/g, "")
                            .replace(/\\b/g, "")
                            .replace(/\\f/g, "")
                            .replace(/'/gm,'"');

      // console.log(priceDetailsData);
      let priceDetails = JSON.parse(priceDetailsData);

      //fetching currentPriceInfo
      var current_result = HTTP.call("GET", "http://money18.on.cc/js/realeng/hk/quote/" + tickerId + "_r.js?t=1474134354934",
                            // {params:
                            //   {user: userId}
                            // }
                            {}
                            );
      // console.log(current_result);

      let current_raw_result = current_result.content;
      let final = current_raw_result.substring(13, current_raw_result.length-3);
      let data = final.replace(/\\n/g, "")
                      .replace(/\\"/g, '')
                      .replace(/\\&/g, "")
                      .replace(/\\r/g, "")
                      .replace(/\\t/g, "")
                      .replace(/\\b/g, "")
                      .replace(/\\f/g, "")
                      .replace(/'/gm,'"');

      // console.log(data);
      let currentPrice= JSON.parse(data);

      let insertObj = Object.assign({},
                                    {openPrc: openPrc.openPrice},
                                    {tickerId: tickerId},
                                    currentPrice,
                                    priceDetails,
                                    {timestamp: moment().valueOf()},
                                    {stockCode: dbStockData.stockCode},
                                    {stockCn: dbStockData.stockCn},
                                    {stockEn: dbStockData.stockEn},
                                    {stockBoardLot: dbStockData.stockBoardLot}
                                   );
      console.log(insertObj);

      let objId = PriceDetails.insert(insertObj);

      let absChange = parseFloat(insertObj.ltp) - parseFloat(insertObj.preCPrice);
      let pctChange = 100*(parseFloat(insertObj.ltp) - parseFloat(insertObj.preCPrice) ) / parseFloat(insertObj.preCPrice);

      let upDownEmoji;
      let upDownSign;

      if(absChange > 0){
        upDownEmoji = '\u2B06';
        upDownSign = "+";
        // \u1f4c8
      } else if(absChange < 0){
        upDownEmoji = '\u2B07';
        upDownSign = "";
        // \u1f4c9
      } else {
        upDownEmoji = '';
        upDownSign = '';
      }


      let message = `Stock: ${insertObj.name}\nCurrent Price: ${insertObj.np}\nChange: ${upDownEmoji} ${absChange.toFixed(3)} (${upDownSign}${pctChange.toFixed(2)}%)`;

      return {message: message, _id: objId};

      // return data;
    } catch (e) {
    // Got a network error, time-out or HTTP error in the 400 or 500 range.
      return e;
    }

  },

  // getDetailPriceInfo(tickerId){
  //   this.unblock();
  //   try {
  //     var result = HTTP.call("GET", "http://money18.on.cc/js/daily/hk/quote/02388_d.js?t=1474142751917",
  //                             {}
  //                           );
  //     console.log(result);
  //     let raw_result = result.content;
  //     let final = raw_result.substring(13, raw_result.length-1);
  //     let data = final.replace(/\\n/g, "")
  //                     .replace(/\\"/g, '')
  //                     .replace(/\\&/g, "")
  //                     .replace(/\\r/g, "")
  //                     .replace(/\\t/g, "")
  //                     .replace(/\\b/g, "")
  //                     .replace(/\\f/g, "")
  //                     .replace(/'/gm,'"');
  //
  //     console.log(data);
  //     data = JSON.parse(data);
  //     return data;
  //   } catch (e) {
  //   // Got a network error, time-out or HTTP error in the 400 or 500 range.
  //     return e;
  //   }
  //
  // },
  // getCurrentPriceInfo(tickerId){
  //   this.unblock();
  //   try {
  //     var result = HTTP.call("GET", "http://money18.on.cc/js/realeng/hk/quote/" + tickerId + "_r.js?t=1474134354934",
  //                           // {params:
  //                           //   {user: userId}
  //                           // }
  //                           {}
  //                           );
  //     console.log(result);
  //
  //     let raw_result = result.content;
  //     let final = raw_result.substring(13, raw_result.length-3);
  //     let data = final.replace(/\\n/g, "")
  //                     .replace(/\\"/g, '')
  //                     .replace(/\\&/g, "")
  //                     .replace(/\\r/g, "")
  //                     .replace(/\\t/g, "")
  //                     .replace(/\\b/g, "")
  //                     .replace(/\\f/g, "")
  //                     .replace(/'/gm,'"');
  //
  //     console.log(data);
  //     data = JSON.parse(data);
  //     return data;
  //   } catch (e) {
  //   // Got a network error, time-out or HTTP error in the 400 or 500 range.
  //     return e;
  //   }
  // }

});
