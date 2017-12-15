// This file is to be run once, then the data munged by a human.

import * as request from "request";

let cities = [
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
  "Beijing",
  "Seoul",
  "Tokyo",
  "Shanghai",
  "Osaka Japan",
  "Hong Kong",
  "Taipei",
  "Bangkok",
  "Manila",
  "Jakarta",
  "Sydney",
  "Ho Chi Minh City",
]

for (let city of cities) {
  request("https://maps.googleapis.com/maps/api/geocode/json?address=" + city + "&key=AIzaSyB0YLfV1WJcLmNpC-8OJkRFQTQM94kFJwQ",
          { json: true },
          (err, res, body) => {
            if (err) { return console.log(err); }
            console.log('"' + city + '": ' + JSON.stringify(body.results[0].geometry.location));
          });
}
