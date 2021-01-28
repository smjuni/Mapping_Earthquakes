// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([30.1900, -97.6687], 4);

// Coordinates for each point to be used in the polyline.
let line = [
  [37.621313,	-122.378955],
  [49.847778, -124.499167],
  [30.1900, -97.6687],
  [44.164371,  -80.036926],
  [40.6413111, -73.7781391]
];

// Create a polyline using the line coordinates and make the line red.s
L.polyline(line, {
  color: "blue",
  weight: 4,
  opacity: "0.5",
  dashArray: "10, 10"
}).addTo(map);


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    id:"light-v10",
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);