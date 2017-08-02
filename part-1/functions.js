const month = function month(string) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  let date = new Date(string);
  let index = months[date.getMonth()];

  return index;
};

const reverseSentence = function reverseSentence(string) {
  var reversedString = string.split(" ").reverse().join(" ")
  return reversedString
};

const nameProps = function nameProps(objectGiven) {
  return Object.keys(objectGiven).sort();
};

const filterBetween = function filterBetween(originalArray, min, max) {
  let newFilteredArray = []
  originalArray.filter(function(string) {
    if (string >= min && string <= max) {
      newFilteredArray.push(string)
    }
  })
  return newFilteredArray;
};

module.exports = {
  month,
  reverseSentence,
  nameProps,
  filterBetween
}
