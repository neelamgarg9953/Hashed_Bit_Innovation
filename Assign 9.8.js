// Given an object with various properties, write a function that returns an array of the object’s keys using Object.keys().

function getObjectKeys(obj) {
    return Object.keys(obj);
  }
  
  // Create an object
  let person = {
    name: "John Doe",
    age: 30,
    occupation: "Software Developer"
  };
  
  // Call the function and log the result
  console.log("Object Keys:", getObjectKeys(person));