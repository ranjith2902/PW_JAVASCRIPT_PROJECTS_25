let marks = [85, 72, 93, 88, 90]; // sample marks array

let highestMarks = 0;
let highestMarksIndex = 0;

for (let i = 0; i < marks.length; i++) {
  if (marks[i] > highestMarks) {
    highestMarks = marks[i];
    highestMarksIndex = i;
  }
}

console.log(`The highest marks scored by a student is ${highestMarks}.`);
console.log(`This was scored by student ${highestMarksIndex + 1}.`);
