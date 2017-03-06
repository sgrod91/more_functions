function filter(arr, fun){
  var a =[];
  arr.forEach(function(n){
    if( fun(n) === true){
      a.push(n);
    }

});
  return a;
}






console.log(filter([1, 2, 3], function(n) { return n % 2 === 1; }));
