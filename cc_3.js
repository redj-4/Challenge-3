//Task 1: Product Price Managment 
let prices = [11.99,12.99,13.99,14.99,15.99];
prices.push(16.99);
prices.shift();
console.log(prices);

//Task 2: Modifying Customer Order Scenario 
let orders = [2,5,10,4,7];
orders[2] += 5; 
let totalOrders = orders.reduce((sum, quantity) => sum + quantity, 0);

console.log('Updated Orders', orders);
console.log('Total Order Count', totalOrders);

//Task 3: Employee Performance Tracking Scenario 
let employee = {
    name: "Carl Baskins",
    role: "Software Engineer",
    performanceScore: 80,
    isActive: true,
};

employee.performanceScore = 90;
employee.promotionElgible = true; 
console.log(employee);

//Task 4: Customer Feedback Records Scenario 
let feedback = [
    { customerName: "Carl Baskins", feedbackText: "Great service!", rating: 5 },
    { customerName: "Bob Marley", feedbackText: "Average experience.", rating: 3 },
    { customerName: "Charlie Puth", feedbackText: "Could be better.", rating: 2 }
  ];

  feedback.push({
    customerName: "Bob Marley",
    feedbackText: "Excellent quality and quick delivery.",
    rating: 4
  });
console.log(feedback);

//Task 5: Inventory Management System Scenario 
let inventory = {
    itemName: "Smartphone",
    stockCount: 300,
    price: 899.99,
    calculateTotalValue: function() {
        return this.stockCount * this.price;
      }
};

console.log("Inventory Details:");
console.log("Item Name:", inventory.itemName);
console.log("Stock Count:", inventory.stockCount);
console.log("Price:", inventory.price);
console.log("Total Value:", inventory.calculateTotalValue());
