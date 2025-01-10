// Ques- 3 JavaScript function findTax() that calculates the tax amount based on the given salary:


function findTax(salary) {
  let taxAmount;

  switch (true) {
    case salary <= 0:
      throw new Error("Salary cannot be negative or zero");
    case salary <= 500000:
      taxAmount = 0;
      break;
    case salary <= 1000000:
      taxAmount = salary * 0.10;
      break;
    case salary <= 1500000:
      taxAmount = salary * 0.20;
      break;
    default:
      taxAmount = salary * 0.30;
  }

  return taxAmount;
}

// Example usage:
console.log(findTax(400000));  // Output: 0
console.log(findTax(600000));  // Output: 60000
console.log(findTax(1200000));  // Output: 240000
console.log(findTax(2000000));  // Output: 600000
