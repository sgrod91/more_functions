function reduce(arr, combine, initialvalue){
  a = initialvalue;

  arr.forEach(function(n){
    a = combine(a,n);
  });
  return a;




}





console.log(reduce([1, 2, 3], function(value, n) { return value + n; }, 0));
