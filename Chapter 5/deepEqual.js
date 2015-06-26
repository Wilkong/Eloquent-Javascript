var deepEqual = function deepEqual(objA, objB) {
    if (typeof objA === typeof objB) {
        if (typeof objA === 'object') {
            if (objA === null && objB === null) {
                return true;
            }
            if (objA === null && objB !== null || objA !== null && objB === null) {
                return false;
            }
            if ( Object.getOwnPropertyNames(objA).length === Object.getOwnPropertyNames(objB).length ) {
                if ( Object.keys(objA).length === 0) {
                    return true;
                }
                for (var prop in objA) {
                    if (!objB.hasOwnProperty(prop)) {
                        return false;
                    }
                    if (typeof objA[prop] === 'object') {
                        return deepEqual(objA[prop], objB[prop]);
                    } else {
                        return objA[prop] === objB[prop];
                    }
                }
            } else {
                return false;
            }
        } else {
            return objA === objB;
        }
    } else {
        return false;
    }
};

var obj = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj, null));
// > true
console.log(deepEqual(obj, {here: 1, object: 2}));
// > false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// > true
