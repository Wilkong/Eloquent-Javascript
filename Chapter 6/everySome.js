
function every(inputArray, func){
    if ( inputArray.length === 0 ) {
        return true;
    }
    for (var i = 0; i < inputArray.length; i++) {
        return func(inputArray[i]) ? 
        every(inputArray.slice(1), func) : false;
    };
}
function some(inputArray, func){
    if ( inputArray.length === 0 ) {
        return false;
    }
    for (var i = 0; i < inputArray.length; i++) {
        return func(inputArray[i]) ? 
        true : some(inputArray.slice(1), func);
    };
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false

console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false
console.log(some([1000, 9, 3, 4], function(x){
    return x === 6;
}));