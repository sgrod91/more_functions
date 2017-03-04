function strJoin(strs, sep) {
  var joinedString = strs.reduce(function(a, b) {
    return a + sep + b;
  });
  console.log(joinedString);
}
strJoin(['Hello', 'and', 'goodbye'], ' ');
