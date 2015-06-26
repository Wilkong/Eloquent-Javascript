var reverseArray = function reverseArray(inputArray) {
    console.time("NewObject");
    var resultArray = [];
    var len = inputArray.length;
    for(var i = 0; i < len; i++) {
        resultArray[i] = inputArray[len-i-1];
        resultArray[len-i-1] = inputArray[i];
    }
    console.timeEnd("NewObject");
    return resultArray;
};

var reverseArrayInPlace = function reverseArray(inputArray) {
    console.time("InPlace");
    var len = inputArray.length,
        temp;
    for (var i = 0; i < len; i++) {
        temp = inputArray[i];
        inputArray[i] = inputArray[len-i-1];
        inputArray[len-i-1] = temp;
    }
    console.timeEnd("InPlace");
};

//Testing

var test = [];

for ( var i = 0; i <= 10000000; i++ ) {
    test.push(i);
}
var temp = reverseArray(test);
reverseArrayInPlace(test);