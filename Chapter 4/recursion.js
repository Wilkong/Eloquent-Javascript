//Зачем они просят тут рекурсию - не понятно
var isEven = function isEven(num) {
    return !Boolean(num % 2);
}
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
