

// //*************************Chart.js chart#1 */

// function makeplot1() {
//     Plotly.d3.csv(`/JM/output_data/WTD_API_BAC_HistoricalMarketData.csv`, function(data){ 
//         processData1(data) } );
//   };
   
//   function processData1(allRows) {
  
//    console.log(allRows);
//    var x = [], y = [];
  
//    for (var i=0; i<allRows.length; i++) {
//      row = allRows[i];
//      x.push( row['Date_Readable'] );
//      y.push( row['Open'] );
//    }
//    console.log( 'X',x, 'Y',y,);
//    makePlotly1( x, y);
//   }
  
//   function makePlotly1( x, y){
//   var ctx = document.getElementById('myChart1').getContext('2d');
//   var chart = new Chart(ctx, {
//           // The type of chart we want to create
//           type: 'line',
      
//           // The data for our dataset
//           data: {
//               labels: x,
//               datasets: [{
//                   label: 'All Stocks',
//                   backgroundColor: 'rgb(255, 99, 132)',
//                   borderColor: 'rgb(255, 99, 132)',
//                   data: y
//               }]
//           },
      
//           // Configuration options go here
//           options: {}
//       }); 
//   };
  
//   makeplot1();




// //*************************Chart.js chart#2 */

// function makeplot2() {
//     Plotly.d3.csv("/JM/output_data/WTD_API_FULL_STOCK_LIST_RealTimeMarketData.csv", function(data){ 
//         processData2(data) } );
//   };
   
//   function processData2(allRows) {
  
//    console.log(allRows);
//    var x = [], y = [];
  
//    for (var i=0; i<allRows.length; i++) {
//      row = allRows[i];
//      x.push( row['symbol'] );
//      y.push( row['price'] );
//    }
//    console.log( 'X',x, 'Y',y,);
//    makePlotly2( x, y);
//   }
  
//   function makePlotly2( x, y){
//   var ctx = document.getElementById('myChart2').getContext('2d');
//   var chart = new Chart(ctx, {
//           // The type of chart we want to create
//           type: 'bar',
      
//           // The data for our dataset
//           data: {
//               labels: x,
//               datasets: [{
//                   label: 'All Stocks',
//                   backgroundColor: 'rgb(255, 99, 132)',
//                   borderColor: 'rgb(255, 99, 132)',
//                   data: y
//               }]
//           },
      
//           // Configuration options go here
//           options: {}
//       }); 
//   };
  
//   makeplot2();

