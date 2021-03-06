function reverseArray(inputArray) {
  console.time('NewObject');
  var resultArray = [];
  var len = inputArray.length;
  for (var i = 0; i < len; i++) {
    resultArray[i] = inputArray[len - i - 1];
  }

  console.timeEnd('NewObject');
  return resultArray;
}

function reverseArrayInPlace(inputArray) {
  console.time('InPlace');
  var len = inputArray.length;
  var temp;
  for (var i = 0; i < len / 2; i++) {
    temp = inputArray[i];
    inputArray[i] = inputArray[len - i - 1];
    inputArray[len - i - 1] = temp;
  }

  console.timeEnd('InPlace');
}

//Testing

var test = [];

for (var i = 0; i <= 20000000; i++) {
  test.push(i);
}

var temp = reverseArray(test);
// console.time('InPlace');
// test.reverse();
// console.timeEnd('InPlace');

reverseArrayInPlace(test);
