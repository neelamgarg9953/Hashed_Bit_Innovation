//  Create an array of numbers and write a function that uses the map() method to return a new array containing each number squared.

let numbers = [1, 2, 3, 4, 5];

// Function to square each number using map()
function squareNumbers(arr) {
  return arr.map((num) => num ** 2);
}

// Call the function and log the result
let squaredNumbers = squareNumbers(numbers);
console.log("Original Array:", numbers);
console.log("Squared Numbers:", squaredNumbers);
