//global scope - (convertion, degreesInCelcius, degreesInCelcius2)
    //local scope - (celcius, degreesInFahrenheit)
        //local scope - (isFreezing)

let conversion = function (degreesInFahrenheit) {
    //T(°C) = (T(°F) - 32) × 5/9
    let celsius = (degreesInFahrenheit - 32) * 5/9

    if (celsius <= 0) {
        let isFreezing = true;
    }
    
    return celsius
}

let degreesInCelsius = conversion(32);
let degreesInCelsius2 = conversion(68);

console.log(degreesInCelsius);
console.log(degreesInCelsius2);
