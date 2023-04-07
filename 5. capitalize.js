function capitalizeName(name) {
    const firstLetter = name.charAt(0);
    const capitalizedFirstLetter = firstLetter.toUpperCase();
    const restOfName = name.slice(1);
  
    return firstLetter === capitalizedFirstLetter ? name : capitalizedFirstLetter + restOfName;
  }
  

  const name = "jane";
const capitalizedName = capitalizeName(name);

console.log(capitalizedName); // "Jane"
