const convertToCelsius = function(temp) {
  let celsius = Math.round((((temp-32)/9)*5)*10)/10;
  return celsius;
};

const convertToFahrenheit = function(temp) {
  let fahr = Math.round(((temp*(9/5))+32)*10)/10;
  return fahr;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
