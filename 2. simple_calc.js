function calculator(num1, num2, operator) {
    let result;
  
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        console.log("Invalid operator");
        return;
    }
  
    console.log(result);
  }
  
  // Example usage:
  calculator(5, 2, "+"); // Output: 7
  calculator(10, 3, "-"); // Output: 7
  calculator(4, 6, "*"); // Output: 24
  calculator(10, 2, "/"); // Output: 5
  calculator(8, 4, "%"); // Output: Invalid operator
  