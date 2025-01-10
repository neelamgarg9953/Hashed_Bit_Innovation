// Ques-9 Write a function to count the number of words in a paragraph.


function countWords(paragraph) {
    return paragraph.split(' ').length;
  }
  
  let paragraph = "My name is Neelam garg. I live in Delhi.";
  console.log(countWords(paragraph));

