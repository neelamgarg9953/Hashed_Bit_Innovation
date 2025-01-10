// Ques-1 How you can create an array of states in India, remove the names starting with vowels, and use array.filter in JavaScript:


// List of states in India
const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal"
];

// Remove state names starting with vowels
const updatedStates = states.filter(state => {
  const firstChar = state.charAt(0).toLowerCase();
  return !'aeiou'.includes(firstChar);
});

console.log(updatedStates);
