let key = "AIzaSyB0YLfV1WJcLmNpC-8OJkRFQTQM94kFJwQ";

let cities = {
  b: [
    "San Francisco",
    "Chicago",
    "Montreal",
    "New York",
    "Washington DC",
    "Atlanta",
    "London",
    "Essen",
    "Madrid",
    "Paris",
    "Milan",
    "St. Petersburg",
  ],
  y: [
    "Los Angeles",
    "Mexico City",
    "Miami",
    "Bogota",
    "Lima",
    "Santiago",
    "Sao Paulo",
    "Buenos Aires",
    "Lagos",
    "Khartoom",
    "Kinshasa",
    "Johannesburg",
  ],
  k: [
    "Algiers",
    "Istanbul",
    "Moscow",
    "Tehran",
    "Baghdad",
    "Cairo",
    "Riyadh",
    "Karachi",
    "Delhi",
    "Kolkata",
    "Chennai",
    "Mumbai",
  ],
  r: [
    "Beijing",
    "Seoul",
    "Tokyo",
    "Shanghai",
    "Osaka",
    "Hong Kong",
    "Taipei",
    "Bangkok",
    "Manila",
    "Jakarta",
    "Sydney",
    "Ho Chi Minh City",
  ]
}

function addMarker(map, color, response) {
  pos = JSON.parse(response.responseText).results[0].geometry.location;
  new google.maps.Marker({
    position: pos,
    map: map,
    icon: {
      url: 'http://localhost:4000/pin/' + color + color + color,
      size: new google.maps.Size(60, 60),
      anchor: new google.maps.Point(30, 30)
    },
    title: 'foo'
  });
}

function initMap() {
  let map = new google.maps.Map(document.getElementById('map'), {
    center: {lat:0, lng:0},
    zoom: 4,
  });

  for (let cityColor in cities) {
    for (let city of cities[cityColor]) {
      var oReq = new XMLHttpRequest();
      oReq.addEventListener("load", function() {
        addMarker(map, cityColor, this);
      });
      oReq.open("GET", "https://maps.googleapis.com/maps/api/geocode/json?address=" + city + "&key=AIzaSyB0YLfV1WJcLmNpC-8OJkRFQTQM94kFJwQ");
      oReq.send();
    }
  }
}
