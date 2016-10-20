import { PriceAlerts, StocksTable } from '/imports/collections'
import lodash from 'lodash'

Template.alertList.helpers({
  alertList() {
    return Template.instance().list.get()
  },
  stock() {
    return StocksTable.findOne({stockCode: this.stockCode})
  },
  number() {
    console.log(this);

    return leftZeroPad(this.stockCode.toString(), 5, '0')
  }
});

Template.alertList.events({
  'click .remove-btn'(e, t) {
    let fbId = Router.current().params.id;
    Meteor.call("updateAlertlist", {_id: this._id}, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("update success");
      }
    })
  }
})

Template.alertList.onCreated(function() {
  this.list = new ReactiveVar([])
})

Template.alertList.onRendered(function() {
  let id = Router.current().params.id;
  if (id) {
    this.autorun(() => {
      let alertList = PriceAlerts.find({fbId: id}).fetch();
      this.list.set(alertList)
    });
  }
})
