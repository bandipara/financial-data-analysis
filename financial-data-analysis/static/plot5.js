
//*************SEARCH */

const searchInput =document.getElementById('stockInput');

searchInput.addEventListener('input', () => {
    console.log('input event fired');
    
    var stock = d3.select("#stockInput").node().value;

//********************CHART-1 */
    function makeplot1(stock) {
      Plotly.d3.csv(`/financial-data-analysis/input_data/WTD_API_${stock}_HistoricalMarketData.csv`, function(data){ 
          processData1(data) } );
    };
     
    function processData1(allRows) {
    
     console.log(allRows);
     var x = [], y = [];
    
     for (var i=0; i<allRows.length; i++) {
       row = allRows[i];
       x.push( row['Date_Readable'] );
       y.push( row['Volume'] );
     }
     console.log( 'X',x, 'Y',y,);
     makePlotly1( x, y);
    }
    
    function makePlotly1( x, y){
    var ctx = document.getElementById('myChart1').getContext('2d');
    var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',
        
            // The data for our dataset
            data: {
                labels: x,
                datasets: [{
                    label: `Trading Volume - ${stock}`,
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: y
                }]
            },
        
            // Configuration options go here
            options: {}
        }); 
    };
    
    makeplot1(stock);
  
  
  
  
  //*************************Chart.js chart#2 */
  
  function makeplot2() {
      Plotly.d3.csv("/financial-data-analysis/input_data/WTD_API_FULL_STOCK_LIST_RealTimeMarketData.csv", function(data){ 
          processData2(data) } );
    };
     
    function processData2(allRows) {
    
     console.log(allRows);
     var x = [], y = [];
    
     for (var i=0; i<allRows.length; i++) {
       row = allRows[i];
       x.push( row['symbol'] );
       y.push( row['price'] );
     }
     console.log( 'X',x, 'Y',y,);
     makePlotly2( x, y);
    }
    
    function makePlotly2( x, y){
    var ctx = document.getElementById('myChart2').getContext('2d');
    var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'bar',
        
            // The data for our dataset
            data: {
                labels: x,
                datasets: [{
                    label: 'Realtime Stock Prices',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: y,
                    
                }]
            },
        
            // Configuration options go here
            options: {}
        }); 
    };
    
    makeplot2();
  
//***********chart#4 */
///JM/output_data/WTD_API_${stock}_HistoricalMarketData.csv
//Plot the chart
function makeplot5(stock) {
    console.log(stock);
    Plotly.d3.csv(`/financial-data-analysis/input_data/WTD_API_${stock}_HistoricalMarketData.csv`, function(data){ 
        processData5(data) } );
  };
   
  function processData5(allRows) {
  
   console.log(allRows);
   var x = [], y = [];
  
   for (var i=0; i<allRows.length; i++) {
     row = allRows[i];
     x.push( row['Date_Readable'] );
     y.push( row['Close'] );
   }
   console.log( 'X',x, 'Y',y,);
   makePlotly5( x, y);
  }
  
  function makePlotly5( x, y){
   var plotDiv = document.getElementById("plot5");
   var traces = [{
     x: x, 
     y: y,
     type: "scatter"
   }];
   var layout = {
    title: `Close Price - ${stock}`,
    xaxis: { title: "Year" },
    yaxis: { title: "USD($)"}
  };
   Plotly.newPlot('plot5', traces, layout);
  };
   makeplot5(stock);



//**************chart3 */
function makeplot(stock) {
  Plotly.d3.csv(`/financial-data-analysis/input_data/WTD_API_${stock}_HistoricalMarketData.csv`, function(data){ 
      processData(data) } );

};
 
function processData(allRows) {

 console.log(allRows);
 var x = [], y = [];

 for (var i=0; i<allRows.length; i++) {
   row = allRows[i];
   x.push( row['Date_Readable'] );
   y.push( row['Open'] );
 }
 console.log( 'X',x, 'Y',y,);
 makePlotly( x, y);
}

function makePlotly( x, y){
 var plotDiv = document.getElementById("plot4");
 var traces = [{
   x: x, 
   y: y,
   type: "bar"
 }];

 var layout = {
  title: `Open Price - ${stock}`,
  xaxis: { title: "Year" },
  yaxis: { title: "USD($)"}
};

 Plotly.newPlot('plot4', traces, layout);
};
 makeplot(stock);

 //*************Populate Table Based on Search Result */
//  function arrayToTable(tableData) {
//   var table = $('<table></table>');
//   $(tableData).each(function (i, rowData) {
//       var row = $('<tr></tr>');
//       $(rowData).each(function (j, cellData) {
//           row.append($('<td>'+cellData+'</td>'));
//       });
//       table.append(row);
//   });
//   return table;
// }

// $.ajax({
//   type: "GET",
//   url: `/JM/output_data/WTD_API_${stock}_HistoricalMarketData.csv`,
//   success: function (data) {
//       $('#stockstable').append(arrayToTable(Papa.parse(data).data));
//   }
// });

 });