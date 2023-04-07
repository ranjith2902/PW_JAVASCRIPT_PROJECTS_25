const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i];
  if (num % 3 !== 0) { // if not divisible by 3
    continue; // skip to the next iteration
  }
  if (num % 2 === 0) { // if divisible by 2
    continue; // skip to the next iteration
  }
  console.log(num); // print the number
}
