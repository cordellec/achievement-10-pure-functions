// Refactor the following code into a function so that it:
// 1. accepts tempF as a parameter;
// 2. returns the temperature in Celcius as a complete sentence;
// 3. logs the returned sentence to the console, from outside the function.

const temperature = function () {
  const tempF = 72;
  const tempC = (5 / 9) * (tempF - 32);
  const tempReading = `${tempF} degrees Fahrenheit is ${tempC} degrees Celcius`;
  return tempReading;
}

// This console log should log the returned value from outside the function
console.log(temperature(72))