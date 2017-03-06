function range(min, max) {
  var arr = [];
  for (var i = min; i < max; i++) {
    arr.push(i);
  }
  return arr;
}

function strMultiply(input, count) {
  var a = range(0, count);
  return a.map(function(a){
    return input;
  });
}
console.log(strMultiply('abc', 5).reduce(function(a,b){
  return a+b;
}));
