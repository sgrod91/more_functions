function product(array) {
  var products = array.reduce(function(a, b) {
  return a * b;
});
  return products;
}
console.log(product([3, 4, 5]));
