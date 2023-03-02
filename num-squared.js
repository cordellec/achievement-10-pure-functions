// Refactor the following code into a function so that it:
// 1. accepts a the num variable as a parameter;
// 2. squares the num and returns it as a complete sentence;
// 3. logs the returned squared num to the console, from outside the function.
const squaring = function (value) {
  const num = 4;
  const numSquared = num * num;
  return `${num} squared is ${numSquared}.`;
}

// This console log should log the returned value from outside the function
console.log(squaring(4));