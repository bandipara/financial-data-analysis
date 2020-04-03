
// // ****************Read Data from API*******************

// // const url = new URL(
// //     "https://intraday.worldtradingdata.com/api/v1/intraday"
// // );

// // let params = {
// //     "symbol": "JPM",
// //     "api_token": "I6g4IFLVfJ7bWyxF94Jm2ufCQzDYTNwIRHIfutPRr3qiir60aq1LIG5qabsX",
// //     "interval": "1",
// //     "range": "1",
// // };
// // Object.keys(params)
// //     .forEach(key => url.searchParams.append(key, params[key]));

// // fetch(url, {
// //     method: "GET",
// // })
// //     .then(response => response.json())
// //     //passing json data to function chartdata
// //     .then(json => chartdata(json));



// // //*******************Test Code************************
// // var trace1 = {
// //   x: ["beer", "wine", "martini", "margarita",
// //     "ice tea", "rum & coke", "mai tai", "gin & tonic"],
// //   y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
// //   type: "bar"
// // };

// // var data = [trace1];

// // var layout = {
// //   title: "'Bar' Chart"
// // };

// // Plotly.newPlot("plot1", data, layout);



// // //*******************CHART-4************************

// function makeplot() {
//   Plotly.d3.csv("allstocks.csv", function(data){ 
//       processData(data) } );

// };
 
// function processData(allRows) {

//  console.log(allRows);
//  var x = [], y = [];

//  for (var i=0; i<allRows.length; i++) {
//    row = allRows[i];
//    x.push( row['symbol'] );
//    y.push( row['price'] );
//  }
//  console.log( 'X',x, 'Y',y,);
//  makePlotly( x, y);
// }

// function makePlotly( x, y){
//  var plotDiv = document.getElementById("plot4");
//  var traces = [{
//    x: x, 
//    y: y,
//    type: "bar"
//  }];

//  Plotly.newPlot('plot4', traces, 
//    {title: 'Stock Prices of All Banks (USD)'});
// };
//  makeplot();




 