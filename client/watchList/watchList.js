import { Watchlist, StocksTable } from '/imports/collections'
import lodash from 'lodash'

Template.watchList.helpers({
  watchList() {
    return Template.instance().list.get()
  },
});

Template.watchList.events({
  'click .remove-btn'(e, t) {
    let fbId = Router.current().params.id;
    let item = parseInt(this.number);
    Template.instance().list.set([]);
    Meteor.call("updateWatchlist", {fbId, item}, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("update success");
      }
    })
  }
})

Template.watchList.onCreated(function() {
  this.list = new ReactiveVar([])
})

Template.watchList.onRendered(function() {
  let id = Router.current().params.id;
  if (id) {
    this.autorun(() => {
      let watchList = Watchlist.findOne({fbId: id});
      if (watchList && watchList.list) {
        for (let i = 0; i < watchList.list.length; i++) {
          let item = watchList.list[i]
          Meteor.call("getPriceSnippet", item, (err, result) => {
            if (err) {
              console.log(err);
            } else {
              let stockObj = StocksTable.findOne({stockCode: parseInt(item)})
              Meteor.call("getPriceDetailsObj", {_id: result._id}, (err, result) => {
                if (err) {
                  console.log(err);
                } else {
                  let priceObj = result;

                  let currentPrice = priceObj.ltp;
                  let absChange = parseFloat(priceObj.ltp) - parseFloat(priceObj.preCPrice);
                  let pctChange = 100*(parseFloat(priceObj.ltp) - parseFloat(priceObj.preCPrice) ) / parseFloat(priceObj.preCPrice);

                  let upDownEmoji;
                  let upDownSign;

                  if(absChange > 0){
                    upDownEmoji = '📈';
                    upDownSign = "+";
                    // \u1f4c8
                  } else if(absChange < 0){
                    upDownEmoji = '📉';
                    upDownSign = "";
                    // \u1f4c9
                  } else {
                    upDownEmoji = '';
                    upDownSign = '';
                  }

                  let currentList = this.list.get()
                  currentList.push({
                    number: leftZeroPad(item.toString(), 5, '0'),
                    name: stockObj.stockEn,
                    price: currentPrice.toString(),
                    change: `${upDownEmoji} ${absChange.toFixed(3)} (${upDownSign}${pctChange.toFixed(2)}%)`
                  })
                  let newList = lodash.uniqBy(currentList, 'number')
                  this.list.set(newList);
                }
              })

            }
          })
        }
      }
    });


  }
})
