var countChar = function countChar(input, ch) {
    var count = 0;
    for (var i = 0; i < input.length; i++) {
        count += input.charAt(i) === ch;
    };
    return count;
};

console.log(countChar("Testing string for countChar", "e"));
