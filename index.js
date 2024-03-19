// index.js

// Function to multiply two numbers
function multiply(num1, num2) {
  return num1 * num2; // Corrected implementation
}

// Function to generate a random integer greater than 0
function random() {
  return Math.floor(Math.random() * 100) + 1; // Generate random integer between 1 and 100
}

module.exports = { multiply, random };


