const fs = require('fs');
const companies = fs.readFileSync('./clients.json', 'utf-8');//or .toString
const companiesParsed = JSON.parse(companies);
const company = process.argv[2];//the command name is the 2 index of the array

companyFinder = function(search) {
  console.log("Finding companies with name " + company + "...");
  var output = filteredCompanies.map(function(i){
    return {
      "id": i.id,
      "company": i.company,
      "phone" : i.phone
    };
  });
  console.log(output);
};

var filteredCompanies = companiesParsed.filter(function(i) {
  return i.company.toLowerCase().startsWith(company) == true
})

companyFinder(company);
