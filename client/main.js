Template.test.onCreated(function testOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.test.helpers({

});

Template.test.events({

  'click .testCurrent'(){
    let tickerInput = $('#tickerInput').val().trim();

    if(tickerInput) {
      let transformTicker = leftZeroPad(tickerInput, 5, "0");
      console.log(transformTicker);

      Meteor.call('getCurrentPriceInfo', transformTicker, (err, result)=>{

        // let data = JSON.parse(result);
        console.log(result);
        // console.log(result.ltt);
      });
    }

  },
  'click .testDetail'(){
    let tickerInput = $('#tickerInput').val().trim();

    if(tickerInput) {
      // let transformTicker = leftZeroPad(tickerInput, 5, "0");
      // console.log(transformTicker);

      Meteor.call('getPriceSnippet', tickerInput, (err, result)=>{

        // let data = JSON.parse(result);
        console.log(result);
        // console.log(data.ltt);
      });
    }
  }
});
