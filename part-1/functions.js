const getMonth = function month(string) {
  let date = new Date(string);
  let index = date.getMonth();
  let months = ["January",
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
  "December"];

  return months[index];
};

const filterBetween = function filterBetween(arr, min, max) {
    let newArray = []
    arr.filter(function(string){
      if (string >= min && string <= max) {
        newArray.push(string)
      }
    })
    return newArray;
  };

module.exports = {
  getMonth,
  filterBetween
}
