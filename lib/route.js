Router.configure({
  layoutTemplate: 'layout',
  // loadingTemplate: 'Loading',
  // notFoundTemplate: 'NotFound'
});

// import SanukerBot from '/import/sanukerbot'
import { receivedMessage, receivedPostback } from '/imports/fbBot'
import { Watchlist } from '/imports/collections'

Router.route('/test', {
  name: 'test',
  template: 'test'
});

Router.route('/priceDetails/:id', {
  name: 'priceDetails',
  template: 'priceDetails',
  waitOn: function () {
    return [
      Meteor.subscribe("priceDetails")
    ]
  },
  // subscriptions: function(){
  //   return [
  //     SubsContacts.subscribe("userWithID", this.params.id),
  //     SubsContacts.subscribe('userById', this.params.id)
  //   ];
  // },
  data: function(){
    return PriceDetails.findOne({_id: this.params.id});
  }
});

Router.route('/watchList/:id', {
  name: 'watchList',
  template: 'watchList',
  waitOn: function () {
    return [
      Meteor.subscribe("priceDetails"),
      Meteor.subscribe("watchlist"),
      Meteor.subscribe("stocksTable")
    ]
  }
});

Router.route('/alertList/:id', {
  name: 'alertList',
  template: 'alertList',
  waitOn: function () {
    return [
      Meteor.subscribe("priceAlerts"),
      Meteor.subscribe("stocksTable")
    ]
  }
});


Router.route( '/webhook', { where: "server" } )
  //for verifying fb app
  .get( function() {
    var req = this.request;
    var res = this.response;

    // console.log('req: ', req);
    // console.log('res: ', res);

    if (req.query['hub.verify_token'] === Meteor.settings.private.verify_token) {
      res.write(req.query['hub.challenge']);
    } else {
      res.write('Error, wrong validation token');
    }
    res.end();
  })

  .post( function() {
    var req = this.request;
    var res = this.response;

    var data = req.body;

    if(data.object == "page") {
      if(data.entry[0].messaging){
        //messenging
        data.entry.forEach(function(pageEntry){
          var pageId = pageEntry.id;
          var timeOfEvent = pageEntry.time;

          pageEntry.messaging.forEach(function(messagingEvent) {
            console.log(messagingEvent);

            if (messagingEvent.optin) {
              //for send to messenger
              // SanukerBot.receivedAuthentication(messagingEvent);
            } else if (messagingEvent.message) {
              //receive Message
              // SanukerBot.receivedMessage(messagingEvent, function(err, result){
                // console.log(result);
              // });
              receivedMessage(messagingEvent)


            } else if (messagingEvent.delivery) {
              //message delivery
              // SanukerBot.receivedDeliveryConfirmation(messagingEvent);
            } else if (messagingEvent.postback) {
              receivedPostback(messagingEvent)
              //postback response
              // SanukerBot.receivedPostback(messagingEvent);
            } else {
              console.log("Webhook received unknown messagingEvent: ", messagingEvent);
            }
          });
        });
      } else if (data.entry[0].changes){
        //page changes
        console.log('got a change from page');
        var changes_events = req.body.entry[0].changes[0].value;
        console.log(changes_events);
      }

    }

    res.statusCode = 200;
    res.end();
  })
