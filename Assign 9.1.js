// Write a JavaScript function that declares a variable using let, const, and var. What is the difference in scope for each?

function scopeTest() {
    var varVariable = "I'm var!";
    let letVariable = "I'm let!";
    const constVariable = "I'm const!";
  
    if (true) {
      var varVariable = "New var!";
      let letVariable = "New let!";
      const constVariable = "New const!"; // This will throw an error
  
      console.log("Inside if block:");
      console.log("varVariable:", varVariable);
      console.log("letVariable:", letVariable);
      console.log("constVariable:", constVariable);
    }
  
    console.log("Outside if block:");
    console.log("varVariable:", varVariable);
    console.log("letVariable:", letVariable);
    console.log("constVariable:", constVariable);
  }
  
  scopeTest();
  