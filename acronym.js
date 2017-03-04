function acronym(array) {
  var abc = array.map(function(a) {
    return a[0];
  });
  var joinStr = abc.reduce(function(a,b) {
    return a + b;
  });
  return joinStr;
}

console.log(acronym(['very', 'important', 'person',]));
