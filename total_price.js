var products = [
  { name: 'Basketball', price: 12.00 },
  { name: 'Tennis Racquet', price: 66.00 },
  { name: 'Tennis Balls', price: 9.00 },
  { name: 'Tennis Balls', price: 9.00 }
];
var prices = products.map(function(item) {
  return item.price;
});

/*console.log(prices)*/

function total(prices) {
  var totalCost = prices.reduce(function(a, b) {
    return a + b;
  });
  return totalCost;
}
console.log(total(prices));
