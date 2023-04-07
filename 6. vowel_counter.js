function countVowels(name) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let i = 0; i < name.length; i++) {
      if (vowels.includes(name[i])) {
        count++;
      }
    }
    return count;
  }
  
  // Example usage:
  const name = "Ranjith Kumar";
  const numVowels = countVowels(name);
  console.log(`Number of vowels in ${name}: ${numVowels}`);
  