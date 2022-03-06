const mapboxToken =
  "pk.eyJ1IjoibmRyd3RybiIsImEiOiJjbDA3bnZkODUyNGI1M2RyczBtaHI2bGV4In0.CGjP2zwrhf3Cq5SVSeqyzw";

//Leaflet API below:
const map = L.map("map").setView([47.606, -122.332], 12.5);

//Mapbox Streets tile layer
L.tileLayer(
  `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${mapboxToken}`,
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken: mapboxToken,
  }
).addTo(map);

//Creates a 'pin' on where the coordinates are:
let markerTest = L.marker([47.606, -122.332]).addTo(map);
let markerTest2 = L.marker([47.609, -122.331]).addTo(map);
let markerTest3 = L.marker([47.603, -122.328]).addTo(map);
let markerTest4 = L.marker([47.609, -122.332]).addTo(map);

//Creates a 'circle' on where the coordinates are:

const circle = L.circle([47.606, -122.332], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0.5,
  radius: 500,
}).addTo(map);

//Pop ups on the marker and the circle
markerTest
  .bindPopup("<b>Playdate happening with my pitbull woof!</b>")
  .openPopup();
markerTest2.bindPopup("<b>I'm number 2</b>").openPopup();
markerTest3.bindPopup("<b>Playdate happening with my Golden!</b>").openPopup();
markerTest4.bindPopup("<b>I'm number 4</b>").openPopup();
circle.bindPopup("Seattle Park");

//popup layer when you need something more than attaching a popup to an object
// const popup = L.popup()
//   .setLatLng([47.606, -122.332])
//   .setContent("I am a standalone popup.")
//   .openOn(map);
