function add(a, b, callback) {
  console.log(a + b);
  callback();
}

add(2, 4, function() {
  console.log('Done');
});

add(4, 5, undefined);
