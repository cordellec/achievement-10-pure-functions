// Refactor the following code into a function so that it:
// 1. accepts the string variable as a parameter;
// 2. returns a capitalized version of the string;
// 3. logs the returned string to the console, from outside the function.

const capitalization = function (word) {
  word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  return word;
}

let city = "mIsSIssIPPi";

// This console log should log the returned value from outside the function
console.log(capitalization(city))