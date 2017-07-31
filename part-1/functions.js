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

module.exports = {
  getMonth,
}
