// let num = 103.941

// //=> to fixed equalls number of decimal places
// console.log(num.toFixed(2));
//     //=> 103.94

// //=> Math is a global 
//     //=> Math.round takes number to round
//     console.log(Math.round(num));
//     console.log(Math.floor(num));
//     console.log(Math.ceil(num));

//     //=> math.random generates random number
// let min = 10
// let max = 20
// let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
//     //range is 0 - 10
//     console.log(randomNum)

//=> challenge 
    //=> function takes in guess then generates random num and if they were correct

    //=> my solution
    let makeGuess = function (guess) {
        let min = 1
        let max = 5
        let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
            if (guess === randomNum) {
                return `Congrats you guessed correctly!`
            } else {
                return `Sorry the number was ${randomNum}. Try again.`
            }
    };

    console.log(makeGuess(1));

    //=> instructor solution

    let makeGuess = function (guess) {
        let min = 1
        let max = 5
        let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
       
        return guess === randomNum
        //=> true or false
    };

    console.log(makeGuess(1));
