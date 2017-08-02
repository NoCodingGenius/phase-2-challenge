const fs = require('fs');
const companies = fs.readFileSync('./clients.json', 'utf-8'); //or .toString
const companiesParsed = JSON.parse(companies);
const companySearch = process.argv[2];

const companyInfoFinder = function(search) {

  console.log("Finding companies with name " + companySearch + "...");

  const filteredCompanies = companiesParsed.filter(function(clients) {
    return clients.company.toLowerCase().startsWith(companySearch);
  })

  const searchResults = filteredCompanies.map(function(clients) {
    return {
      "id": clients.id,
      "company": clients.company,
      "phone": clients.phone
    }
  });
  console.log(searchResults);
};

companyInfoFinder(companySearch);
