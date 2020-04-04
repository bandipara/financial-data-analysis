
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
//  var plotDiv = document.getElementById('.ct-chart');
//  var traces = [{
//    x: x, 
//    y: y,
//    type: "bar"
//  }];

//  new Chartist.Line('.ct-chart', traces, 
//    {title: 'Stock Prices of All Banks (USD)'});
// };
//  makeplot();




 //*************TEST CODE */
var data = {
  labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
  series: [
    [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
  ]
};

var options = {
  high: 10,
  low: -10,
  axisX: {
    labelInterpolationFnc: function(value, index) {
      return index % 2 === 0 ? value : null;
    }
  }
};

new Chartist.Line('.ct-chart', data, options);