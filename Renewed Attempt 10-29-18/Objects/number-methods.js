// let num = 103.941;

// // toFixed - customize number of decimal places
// console.log(num.toFixed(2));

// // Math methods 
//     // round
// console.log(Math.round(num));
//     // floor
// console.log(Math.floor(num));
//     // ceil (ceiling)
// console.log(Math.ceil(num));
//     // random - generates num b/w 0-1

// let min = 10;
// let max = 20;

// let randomNum = Math.random();
//     // 0 - .9999999

// let randomNum = Math.random() * (max - min);
//     // 0 - 9.999999

// let randomNum = Math.random() * (max - min + 1);
//     // 0 - 10.999999

// let randomNum = Math.floor(Math.random() * (max - min + 1));
//     // 0 - 10

// let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
//     // 10 - 20

// console.log(randomNum);

//challenge - function - guess generate random num and if guess was correct, return true
let makeGuess = function (num) {
    let max = 10
    let min = 1
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

       if (num === randomNum) {
           return "You guessed right! You win!!!"
       } else {
           return `Sorry, the number was ${randomNum}. Try again.`
       };

};

console.log(makeGuess(5));




