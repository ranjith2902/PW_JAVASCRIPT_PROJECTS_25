function calculateRentalCost(numDays, carType) {
    let rentalCost = 0;
    
    switch (carType) {
      case "Economy":
        rentalCost = 4000; // Rs. 4,000/- per day
        break;
      case "Midsizd":
        rentalCost = 15000; // Rs. 15,000/- per day
        break;
      case "Luxury":
        rentalCost = 20000; // Rs. 20,000/- per day
        break;
      default:
        console.log("Invalid car type.");
        return null;
    }
    
    return rentalCost * numDays;
  }
  
  let rentalCost = calculateRentalCost(3, "Midsizd"); // calculates cost of renting a Midsizd car for 3 days
console.log(rentalCost); // prints 45000
