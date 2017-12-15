// (echo 'cities = ' ; cat cities.json ; cat map-in.js) > map.js
//
// ./node_modules/browserify/bin/cmd.js map-in.js cities.json -o map.js

function addMarker(map, color, response) {
}

function initMap() {
  let map = new google.maps.Map(document.getElementById('map'), {
    center: {lat:0, lng:0},
    zoom: 4,
  });

  for (let city in cities) {
    var c = cities[city]
    new google.maps.Marker({
      position: c,
      map: map,
      icon: {
        url: 'http://localhost:4000/pin/' + c.color + c.color + c.color,
        size: new google.maps.Size(60, 60),
        anchor: new google.maps.Point(30, 30)
      },
      title: 'foo'
    });
  }
}
