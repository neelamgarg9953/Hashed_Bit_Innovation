// Write a function that takes two objects as arguments and merges them into one object using Object.assign(). Return the new object.

function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
  }
  
  // Create two objects
  let person = {
    name: "John Doe",
    age: 30
  };
  
  let occupation = {
    occupation: "Software Developer",
    location: "New York"
  };
  
  // Call the function and log the result
  console.log("Merged Object:", mergeObjects(person, occupation));