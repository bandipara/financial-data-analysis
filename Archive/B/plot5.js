


//***********************chart5***************************/

//Variable to change the title
//var stock= "AIG"
// Submit Button handler
// function handleSubmit() {
//   // Prevent the page from refreshing
//   d3.event.preventDefault();

//   // Select the input value from the form
//   var stock = d3.select("#stockInput").node().value;
//   console.log(stock);

//   // clear the input value
//   d3.select("#stockInput").node().value = "";

//   // Build the plot with the new stock
//   makeplot5(stock);
// }

const searchInput =document.getElementById('stockInput');

searchInput.addEventListener('input', () => {
    console.log('input event fired');
    //d3.event.preventDefault();
    var stock = d3.select("#stockInput").node().value;
    //console.log(stock);
    //makeplot5(stock);
    //makePlotly5(stock);


//Plot the chart
function makeplot5(stock) {
    console.log(stock);
    Plotly.d3.csv(`/JM/output_data/WTD_API_${stock}_HistoricalMarketData.csv`, function(data){ 
        processData5(data) } );
  
  };
   
  function processData5(allRows) {
  
   console.log(allRows);
   var x = [], y = [];
  
   for (var i=0; i<allRows.length; i++) {
     row = allRows[i];
     x.push( row['Date_Readable'] );
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
   var layout = {title: `Historical Data ${stock}`};

   Plotly.newPlot('plot5', traces, layout);
  };
   makeplot5(stock);

   // Add event listener for Search button
//  d3.select("#submit").on("click", handleSubmit);

//**************chart4 */
function makeplot() {
  Plotly.d3.csv("allstocks.csv", function(data){ 
      processData(data) } );

};
 
function processData(allRows) {

 console.log(allRows);
 var x = [], y = [];

 for (var i=0; i<allRows.length; i++) {
   row = allRows[i];
   x.push( row['symbol'] );
   y.push( row['price'] );
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

 Plotly.newPlot('plot4', traces, 
   {title: 'Stock Prices of All Banks (USD)'});
};
 makeplot();

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