let greetUser = function () {
    console.log("welcome user");
};

greetUser();

let squareNum = function (num) {
    let result = num * num;
    return result;
};

let value = squareNum(3);
console.log(value);

//= challenge

let conversion = function (fahrenheit) {
   let celsius = (fahrenheit - 32) * 5/9;
        return celsius;
}

let convertedTemp = conversion(32);
let convertedTemp2 = conversion(68);

console.log(convertedTemp);
console.log(convertedTemp2);