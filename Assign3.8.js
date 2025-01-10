// Ques-8 Write a function to find repeated sum of digits until there is only a single digit in the number.
// Example - 456 - 4+5+6 = 15 - 1+5 = 6.

function singleDigit(n) {
    while (n >= 10) {
      n = n.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    }
    return n;
  }
  
  console.log(singleDigit(984)); 