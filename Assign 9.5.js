//  Write a function that filters out all even numbers from an array of numbers using the filter() method. Return the new array of odd numbers

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Function to filter out even numbers using filter()
function getOddNumbers(arr) {
return arr.filter((num) => num % 2 !== 0);
}

// Call the function and log the result
let oddNumbers = getOddNumbers(numbers);
console.log("Original Array:", numbers);
console.log("Odd Numbers:", oddNumbers);
