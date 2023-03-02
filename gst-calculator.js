// Refactor the following code into a function so that it:
// 1. accepts the subTotal variable as a parameter;
// 2. returns a complete sentence containing the total (subTotal plus 5% GST);
// 3. logs the returned sentence to the console, from outside the function.

const gstCalculator = function () {
  const subTotal = 40;
  const total = subTotal * 0.05 + subTotal;
  return `$${subTotal} plus GST is $${total}.`;
}

// This console log should log the returned value from outside the function
console.log(gstCalculator(40));