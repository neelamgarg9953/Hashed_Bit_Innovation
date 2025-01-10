// Write a function that takes an array as an argument, adds a new element to the end of the array using push(), and then removes the last element using pop(). Return the modified array.

function modifyArray(arr) {
    // Add a new element to the end of the array
    arr.push("New Element");
    
    // Remove the last element from the array
    arr.pop();
    
    // Return the modified array
    return arr;
  }
  
  // Test the function
  let originalArray = [1, 2, 3, 4, 5];
  console.log("Original Array:", originalArray);
  
  let modifiedArray = modifyArray(originalArray);
  console.log("Modified Array:", modifiedArray);
  