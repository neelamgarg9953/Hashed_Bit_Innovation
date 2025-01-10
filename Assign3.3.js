// Ques- 3 let string = 'INDIA'
// output = 'INDONESIA'
// Use array.splice

let string = 'INDIA';

// Convert the string to an array
let arr = string.split('');

// Use array splice to insert 'ONES' at the correct position
arr.splice(4, 0, 'O', 'N', 'E', 'S');

let result = arr.join('');

console.log(result);
