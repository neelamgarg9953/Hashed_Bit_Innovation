// Ques- 5  Write a function to replace wrong word with correct word in any sentance.
// Like this - correctfn(string, wrong, correct)
// Use string.replace in function.

function correctfn(string, wrong, correct) {
    return string.replace(new RegExp(wrong, 'g'), correct);
}

// Example usage:
let sentence = "I love to eet pizza.";
let correctedSentence = correctfn(sentence, "eet", "eat");
console.log(correctedSentence);