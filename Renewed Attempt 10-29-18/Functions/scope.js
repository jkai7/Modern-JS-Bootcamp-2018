let conversion = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9;

    if (celsius <= 0) {
       let isFreezing = true;
    }

    return celsius;
 }
 
 let convertedTemp = conversion(32);
 let convertedTemp2 = conversion(68);
 
 console.log(convertedTemp);
 console.log(convertedTemp2);