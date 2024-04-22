const convertToCelsius = function(value) {
  value = (value - 32) * 5/9;
  return parseFloat(value.toFixed(1));
};

const convertToFahrenheit = function(value) {
  value = (value * 9/5) + 32;
  return parseFloat(value.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
