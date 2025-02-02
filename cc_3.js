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
    name: "Jack Mioff",
    role: "Software Engineer",
    performanceScore: 80,
    isActive: true,
};

employee.performanceScore = 90;
employee.promotionElgible = true; 
console.log(employee);
