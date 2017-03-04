var arr = [1, 2, 3, 4, 5, 6];
function isEven(n) {
  return n % 2 !== 1;
}
var evens = arr.filter(isEven);
console.log(evens);
