const fs = require('fs');
const companies = fs.readFileSync('./clients.json', 'utf-8'); //or .toString
const companiesParsed = JSON.parse(companies);
const company = process.argv[2];

const companyFinder = function(search) {
  console.log("Finding companies with name " + company + "...");
  var output = filteredCompanies.map(function(clients) {
    return {"id": clients.id, "company": clients.company, "phone": clients.phone};
  });
  console.log(output);
};

const filteredCompanies = companiesParsed.filter(function(clients) {
  return clients.company.toLowerCase().startsWith(company);
})

companyFinder(company);
