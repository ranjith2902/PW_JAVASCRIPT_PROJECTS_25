const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    const discountAmount = originalPrice - discountedPrice;
    const discountPercentage = (discountAmount / originalPrice) * 100;
    return Math.round(discountPercentage * 100) / 100; // round off to two decimal places
  };
  
  const originalPrice = 100;
const discountedPrice = 80;
const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
console.log(`You save ${discountPercentage}%`); // output: "You save 20%!"
