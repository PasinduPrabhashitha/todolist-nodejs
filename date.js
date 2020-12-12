module.exports.getDayName = function getDayName() {
  //Get day name
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date();
  const day = date.getDay();
  return (dayName = days[day]);
};

module.exports.getMonthName = function getMonthName() {
  //Get months
  const months = [
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
    "December",
  ];
  const date = new Date();
  const month = date.getMonth();
  return months[month];
};

//Get Day with suffix
module.exports.getDayWithSuffix = function getDayWithSuffix() {
  //Get Date suffix
  function ordinal_suffix_of(i) {
    var j = i % 10,
      k = i % 100;
    if (j == 1 && k != 11) {
      return i + "st";
    }
    if (j == 2 && k != 12) {
      return i + "nd";
    }
    if (j == 3 && k != 13) {
      return i + "rd";
    }
    return i + "th";
  }
  const date = new Date();
  //Get Date(1-30)
  const monthDate = date.getDate();
  return ordinal_suffix_of(monthDate);
};
