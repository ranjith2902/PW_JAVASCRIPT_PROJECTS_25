function mixColors(color1, color2) {
    switch (color1.toLowerCase()) {
      case "red":
        switch (color2.toLowerCase()) {
          case "blue":
            return "purple";
          case "yellow":
            return "orange";
          default:
            return "Invalid color combination";
        }
      case "blue":
        switch (color2.toLowerCase()) {
          case "red":
            return "purple";
          case "yellow":
            return "green";
          default:
            return "Invalid color combination";
        }
      case "yellow":
        switch (color2.toLowerCase()) {
          case "red":
            return "orange";
          case "blue":
            return "green";
          default:
            return "Invalid color combination";
        }
      default:
        return "Invalid color combination";
    }
  }
  
  console.log(mixColors("red", "blue")); // Output: purple
console.log(mixColors("blue", "yellow")); // Output: green
console.log(mixColors("yellow", "red")); // Output: orange
console.log(mixColors("green", "purple")); // Output: Invalid color combination
