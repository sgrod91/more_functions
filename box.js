function range(min, max) {
  var arr = [];
  for (var i = min; i < max; i++) {
    arr.push(i);
  }
  return arr;
}


function box(x,y){
  a = range(1, x*y+1);

  return a.map(function(a){
    if (a % x === 0 && a != 1){
      return "*\n";
    }
    else{
      return '*';
    }
  });
}

console.log(box(3,4).reduce(function(a,b){return a + b;}));
