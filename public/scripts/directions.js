// let googleMap;
// const url = '#';
// const request = new XMLHttpRequest();

// function loadData() {
//     request.open('GET', url);
//     request.onload = loadComplete;
//     request.send();
// }

// function loadComplete(evt) {
//     googleMap = JSON.parse(request.responseText);
//     console.log(googleMap);

//     //Put JSON Object data into directions.jade
// }

// loadData();

var map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([37.41, 8.82]),
      zoom: 4
    })
  });