const convertToCelsius = function(tempf) {
    let result=(tempf-32)*(5/9);
    return +result.toFixed(1);
};

const convertToFahrenheit = function(tempc) {
    let result= (tempc*9/5)+32;
    return +result.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
