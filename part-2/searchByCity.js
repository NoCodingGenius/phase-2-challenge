const fs = require('fs');
const cities = fs.readFileSync('./clients.json', 'utf-8');
const citiesParsed = JSON.parse(cities);
const city = process.argv[2];

cityFinder = function(search) {
  console.log("Finding clients in City " + city + "...");
  var output = filteredCities.map(function(i) {
    return {"id": i.id, "rep_name": i.rep_name, "company": i.company, "city": i.city, "state": i.state}
  });
  console.log(output);
};

var filteredCities = citiesParsed.filter(function(i) {
  return i.city.toLowerCase().startsWith(city) === true
})

cityFinder(city);
