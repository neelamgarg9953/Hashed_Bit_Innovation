// Ques- 2 let str = 'I love my India'
// output expected = 'India my love I'
// Write code for this.

let str='I Love My India';
let words =str.split(' ');
//  reverse the word
let reverseWords=words.reverse();
let result=reverseWords.join(' ');

console.log(result);