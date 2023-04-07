// Get user input for the number of rows
let i = 6;

// Loop through each row and print the asterisks
for (let row = i; row >= 1; row--) {
  let pattern = "";
  // Add asterisks to the pattern for each column
  for (let col = 1; col <= row; col++) {
    pattern += "*";
  }
  // Print the pattern for the current row
  console.log(pattern);
}
