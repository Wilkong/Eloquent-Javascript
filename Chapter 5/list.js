var listElement = function listElement(value, list) {

var elem = {};
    elem.value = value;
    elem.rest = list ? list : null;
    return elem;
};

var prepend = function prepend(value, list) {
    var elem = listElement(value, list);
    return elem;
};

var arrayToList = function arrayToList(inputArray) {
    if ( inputArray.length === 0 ) {
        return null;
    }
    return { value: inputArray[0],
             rest: arrayToList(inputArray.slice(1))
    };
};
var listToArray = function listToArray(list) {
    var array = [];
    array.push(list.value);
    if ( list.rest === null ) {
        return array;
    }
    return array.concat(listToArray(list.rest));
};

var nth = function nth(list, index) {
    if ( index === 0 ) {
        return list.value;
    }
    if ( list.rest === null || index < 0) {
        return undefined;
    }
    return nth(list.rest, --index);
};

console.log(arrayToList([10, 20, 30]));
console.log(prepend(99,arrayToList([10, 20])));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(nth(arrayToList([10, 20, 30, 40, 50, 60, 70, 80, 90]),5));
