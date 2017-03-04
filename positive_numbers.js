var arr = [-1, -2, -3, 1, 2, 3];
function isPositive(n) {
  return n >= 1;
}
var positives = arr.filter(isPositive);
console.log(positives);
