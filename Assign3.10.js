// Ques-10 Write a function to reverse a string.
// Input - Hello
// Outpur - olleH


function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  console.log(reverseString('Hello'));