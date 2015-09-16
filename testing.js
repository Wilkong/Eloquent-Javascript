var singleNumber = function(nums) {
    var result = {};
    nums.forEach(function(el){
        if (result.hasOwnProperty(el)) {
            result[el] += 1;
        } else {
            result[el] = 1;
        }
    });
    for (var item in result) {
      if (result.hasOwnProperty(item)) {
        if(result[item] === 1){
            return parseInt(item);
        }
      }
    }
};
console.log(singleNumber([1, 2, 3, 4, 3, 1, 4]));
