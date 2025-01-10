//  Write a function that takes an object with properties width and height and returns the area of a rectangle (width * height).

function calculateArea(rectangle) {
    return rectangle.width * rectangle.height;
  }
  
  // Create a rectangle object
  let rectangle = {
    width: 10,
    height: 20
  };
  
  // Call the function and log the result
  console.log("The area of the rectangle is:", calculateArea(rectangle));