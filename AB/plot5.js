


//***********************chart5***************************/

//Variable to change the title
var stock_hist= "BAC"
//Plot the chart
function makeplot5() {
    Plotly.d3.csv("WTD_API_AIG_HistoricalMarketData.csv", function(data){ 
        processData5(data) } );
  
  };
   
  function processData5(allRows) {
  
   console.log(allRows);
   var x = [], y = [];
  
   for (var i=0; i<allRows.length; i++) {
     row = allRows[i];
     x.push( row['Date'] );
     y.push( row['Open'] );
   }
   console.log( 'X',x, 'Y',y,);
   makePlotly5( x, y);
  }
  
  function makePlotly5( x, y){
   var plotDiv = document.getElementById("plot5");
   var traces = [{
     x: x, 
     y: y,
     type: "bar"
   }];
  
   Plotly.newPlot('plot5', traces, 
     {title: `Historical Data ${stock_hist}`});
  };
   makeplot5();