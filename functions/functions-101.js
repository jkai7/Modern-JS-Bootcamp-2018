//function = input (argument(s)), code, output (return value)

// let greetUser = function () {
//     console.log('Welcome user!')
// }

// greetUser();

// let square = function (num) {
//     let result = num *num;
//     return result;
// }

// let value = square(3);

// console.log(value)

//challenge
//convert fahrenheit to celcius

let conversion = function (degreesInFahrenheit) {
    //T(°C) = (T(°F) - 32) × 5/9
    let celsius = (degreesInFahrenheit - 32) * 5/9
    return celsius
}

let degreesInCelsius = conversion(32);
let degreesInCelsius2 = conversion(68);

console.log(degreesInCelsius);
console.log(degreesInCelsius2);