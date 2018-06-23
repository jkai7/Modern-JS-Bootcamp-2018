let fahrenheit = 32;

let celcius = (fahrenheit - 32) * 5/9;

console.log(celcius);

let kelvinBeforeRound = (fahrenheit + 459.67) * 5/9;
let kelvin = Math.round(kelvinBeforeRound);

console.log(kelvin); 