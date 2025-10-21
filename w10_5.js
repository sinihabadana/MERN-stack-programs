// User-defined module to perform mathematical operations
// Function to add two numbers
function add(a, b) {
  return a + b;
}
// Function to subtract two numbers
function subtract(a, b) {
  return a - b;
}
// Function to multiply two numbers
function multiply(a, b) {
  return a * b;
}
// Function to divide two numbers
function divide(a, b) {
  if (b === 0) return 'Error: Division by zero';
  return a / b;
}
// Export the functions to make them available outside this module
module.exports = {
  add,
  subtract,
  multiply,
  divide
};