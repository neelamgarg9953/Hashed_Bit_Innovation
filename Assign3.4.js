// Ques- 4 Take any string with minimum 20 characters. Count number of consonant and vowel in the string

let string = "my name is neelam garg. i live in delhi"

// Initialize 
let consonantCount = 0;
let vowelCount = 0;

for (let char of string) {
    // Check if the character is a letter
    if (char.match(/[a-z]/)) {
        // Check if the character is a vowel
        if ('aeiou'.includes(char)) {
            vowelCount++;
        } else {
            consonantCount++;
        }
    }
}


console.log(`Vowel count: ${vowelCount}`);
console.log(`Consonant count: ${consonantCount}`);
