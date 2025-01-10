function calculate(num1, num2, operation) {
    let result;
  
    switch (operation) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          throw new Error("Cannot divide by zero");
        }
        break;
      default:
        throw new Error("Invalid operation");
    }
  
    return result;
  }

  console.log(calculate(15, 2, '+'));  // Output: 17
console.log(calculate(16, 2, '-'));  // Output: 14
console.log(calculate(0, 2, '*'));  // Output: 0
console.log(calculate(10, 2, '/'));  // Output: 5
