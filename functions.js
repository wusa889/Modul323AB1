function multi(num1, num2) {
    return num1 * num2;
}

console.log(multi(2,2))
console.log(multi(3, 2))
console.log(multi(4, 4))

function convertToFahrenheit(num){
    return num * 1.8 + 32
}

console.log(convertToFahrenheit(1))
console.log(convertToFahrenheit(10))
console.log(convertToFahrenheit(32))

let arrow = (num, num1) => {return num % num1};
let lamb = function(num, num1){return num % num1};

console.log(arrow(3, 2))
console.log(lamb(3 ,2))