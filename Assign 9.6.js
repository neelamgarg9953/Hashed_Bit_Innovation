// Create an object called person with properties for name, age, and occupation. Write a function that logs a greeting message using these properties.

let person = {
    name: "John Doe",
    age: 30,
    occupation: "Software Developer"
  };
  
  // Function to log a greeting message
  function greetPerson(person) {
    console.log(`Hello, my name is ${person.name} and I am a ${person.age} year old ${person.occupation}.`);
  }
  
  // Call the function and log the greeting message
  greetPerson(person);
  