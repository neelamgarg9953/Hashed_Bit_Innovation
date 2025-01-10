// Ques-11 Write code to find average as mentioned above. Use array and object methods.

let students = [
    { student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 } },
    { student2: { subject1: 98, subject2: 86, subject3: 72, subject4: 92, subject5: 57 } },
    { student3: { subject1: 94, subject2: 59, subject3: 83, subject4: 99, subject5: 91 } },
  ];
  
  let result = students.map(student => {
    let scores = Object.values(student)[0];
    let average = Object.values(scores).reduce((sum, score) => sum + score, 0) / Object.keys(scores).length;
    return { [Object.keys(student)[0]]: { average } };
  });
  
  console.log(result);
  