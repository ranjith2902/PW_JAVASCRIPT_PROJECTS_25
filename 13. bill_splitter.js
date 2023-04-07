function calculateBill(costs, numPeople) {
    // Calculate the total cost of the meal
    const totalCost = costs.reduce((acc, curr) => acc + curr, 0);
  
    // Calculate the amount each person owes
    const perPerson = totalCost / numPeople;
  
    // Create an object with the total and per-person costs
    const bill = {
      total: totalCost,
      perPerson: perPerson,
    };
  
    return bill;
  }
  

  const costs = [10.99, 8.75, 12.50, 6.95];
const numPeople = 4;

const bill = calculateBill(costs, numPeople);

console.log(bill);
// Output: { total: 39.19, perPerson: 9.7975 }
