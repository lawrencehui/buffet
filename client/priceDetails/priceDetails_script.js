// import Highcharts from 'highcharts/highstock';
var Highcharts = require('highcharts/highstock');

Template.priceDetails.helpers({
	stockCode() {

		return leftZeroPad(this.stockCode.toString(), 5, '0')
	},
	getVolume(vol){
		return (vol / 1000000).toFixed(2);
	},
	getTurnover(turnover){
		return (turnover / 1000000).toFixed(2);
	},
	getAbsChg(ltp, preCPrice)	{
		let prcChg = parseFloat(ltp) - parseFloat(preCPrice);
		let upDownSign;

		if(prcChg > 0){
			upDownSign = "+";
		} else if(prcChg < 0){
			upDownSign = "";
		} else {
			upDownEmoji = '';
		}
		return upDownSign + prcChg.toFixed(3);
	},
	getPctChg(ltp, preCPrice){
		let pctChange = 100*(parseFloat(ltp) - parseFloat(preCPrice) ) / parseFloat(preCPrice);
		return pctChange.toFixed(2)
	},
	formatLtp(ltp){
		// console.log(ltp)
		return parseFloat(ltp).toFixed(2);
	}

});

Template.priceDetails.events({


});

Template.priceDetails.onRendered(function(){
	let tickerInput = 1;
	let formattedTicker = 'hk' + leftZeroPad(tickerInput, 5, "0");


	// HTTP.call("GET", "http://web.ifzq.gtimg.cn/appstock/app/hkfqkline/get?_var=kline_dayqfq&param="+formattedTicker+",day,,,30,qfq",
  //         {},
  //         function (error, result) {
  //           if (!error) {
              // console.log(result.content);

							// let data = result.content;

							// data = data.substring(13, data.length);

							// let parsedData = JSON.parse(data);

							// console.log(parsedData.data[formattedTicker].qfqday);
							// let finalData = parsedData.data[formattedTicker].qfqday;
							let finalData = [
								[1253491200000,26.33,26.45,25.95,26.29],
								[1253577600000,26.46,26.48,26.12,26.35],
								[1253664000000,26.49,26.99,26.43,26.50],
								[1253750400000,26.74,26.81,26.11,26.26],
								[1253836800000,26.00,26.50,25.92,26.05],
								[1254096000000,26.27,26.67,26.19,26.59],
								[1254182400000,26.68,26.77,26.33,26.48],
								[1254268800000,26.59,26.64,26.09,26.48],
							]

							$('#testHighChart').highcharts('StockChart', {

								chart: {
									height: 300
								},

								rangeSelector : {
										enabled: false
										// selected : 1,
										// inputEnabled : false
								},

								title : {
										text : 'testing Stock Price'
								},

								series : [{
										// type: 'candlestick',
										name : 'AAPL',
										data : finalData,
										tooltip: {
												valueDecimals: 2
										}
								}]
							})
            // }
          // });



});

Template.priceDetails.onCreated(function(){


});
