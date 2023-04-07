// Sample input cart with duplicates
const inputCart = ['item1', 'item2', 'item3', 'item1', 'item4', 'item3'];

// Function to remove duplicates from a cart
function removeDuplicates(cart) {
  return [...new Set(cart)];
}

// Remove duplicates from the input cart
const outputCart = removeDuplicates(inputCart);

// Output the new cart without duplicates
console.log(outputCart);
