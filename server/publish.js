import { Watchlist, StocksTable, PriceAlerts } from '/imports/collections'

Meteor.publish("priceDetails", function(){
  return PriceDetails.find()
});

Meteor.publish("watchlist", function(){
  return Watchlist.find()
});

Meteor.publish("stocksTable", function(){
  return StocksTable.find()
});

Meteor.publish("priceAlerts", function(){
  return PriceAlerts.find()
});
