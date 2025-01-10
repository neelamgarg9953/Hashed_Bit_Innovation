// Create an array of numbers and write a function that uses the reduce() method to calculate the sum of all the numbers in the array

let numbers = [1, 2, 3, 4, 5];

// Function to calculate the sum of numbers using reduce()
function calculateSum(arr) {
return arr.reduce((accumulator, current) => accumulator + current, 0);
}

// Call the function and log the result
console.log("Sum of numbers:", calculateSum(numbers));