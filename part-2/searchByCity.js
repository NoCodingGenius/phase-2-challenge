const fs = require('fs');
const cities = fs.readFileSync('./clients.json', 'utf-8');
const citiesParsed = JSON.parse(cities);
const citySearch = process.argv[2];

const cityInfoFinder = function(search) {

  console.log("Finding clients in City " + citySearch + "...");

  const filteredCities = citiesParsed.filter(function(clients) {
    return clients.city.toLowerCase().startsWith(citySearch);
  })

  const searchResults = filteredCities.map(function(clients) {
    return {
      "id": clients.id,
      "rep_name": clients.rep_name,
      "company": clients.company,
      "city": clients.city,
      "state": clients.state
    }
  });
  console.log(searchResults);
};

cityInfoFinder(citySearch);
