// Define a Customer class with a name and balance property
class Customer {
    constructor(name, balance) {
      this.name = name;
      this.balance = balance;
    }
  
    // Define a deposit method to add to the balance
    deposit(amount) {
      this.balance += amount;
      console.log(`Deposit of ${amount} successful. New balance is ${this.balance}.`);
    }
  
    // Define a withdraw method to subtract from the balance
    withdraw(amount) {
      if (amount > this.balance) {
        console.log(`Insufficient funds. Withdrawal of ${amount} unsuccessful. Current balance is ${this.balance}.`);
      } else {
        this.balance -= amount;
        console.log(`Withdrawal of ${amount} successful. New balance is ${this.balance}.`);
      }
    }
  }
  
  // Example usage
  const customer1 = new Customer('Alice', 100);
  customer1.deposit(50); // Deposit of 50 successful. New balance is 150.
  customer1.withdraw(75); // Withdrawal of 75 successful. New balance is 75.
  customer1.withdraw(100); // Insufficient funds. Withdrawal of 100 unsuccessful. Current balance is 75.
  