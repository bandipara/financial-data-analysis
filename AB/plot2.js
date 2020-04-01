
// Read Data from API

const url = new URL(
    "https://intraday.worldtradingdata.com/api/v1/intraday"
);

let params = {
    "symbol": "JPM",
    "api_token": "I6g4IFLVfJ7bWyxF94Jm2ufCQzDYTNwIRHIfutPRr3qiir60aq1LIG5qabsX",
    "interval": "1",
    "range": "1",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

fetch(url, {
    method: "GET",
})
    .then(response => response.json())
    //passing json data to function chartdata
    .then(json => chartdata(json));

//Reading Json data fetched from the API
function chartdata(data) {
console.log(data);

var trace1 = {
    x: [data.symbol],
    y: [3],
    type: "bar"
  };
  
  var data = [trace1];
  
  var layout = {
    title: "'Bar' Chart"
  };
  
  Plotly.newPlot("plot1", data, layout);


};

// function unpack(rows, index) {
//   return rows.map(function(row) {
//     return row[index];
//   });
// }

// var url = "https://api.worldtradingdata.com/api/v1/history?symbol=SNAP&api_token=I6g4IFLVfJ7bWyxF94Jm2ufCQzDYTNwIRHIfutPRr3qiir60aq1LIG5qabsX" ;



// d3.json(url).then(function(stocks) {
//     console.log(stocks);

//  });

// var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
// // console.log(queryUrl)
// // Perform a GET request to the query URL
// d3.json(queryUrl, function(data) {
//   // Once we get a response, send the data.features object to the createFeatures function
//   createFeatures(data.features);
  
// });

// //Test Code
// var trace1 = {
//   x: ["beer", "wine", "martini", "margarita",
//     "ice tea", "rum & coke", "mai tai", "gin & tonic"],
//   y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//   type: "bar"
// };

// var data = [trace1];

// var layout = {
//   title: "'Bar' Chart"
// };

// Plotly.newPlot("plot1", data, layout);