//multiple arguments

// let add = function (num1, num2, num3) {
//     return num1 + num2 + num3
// }

// let result = add(1, 2, 3);
// console.log(result);

//default arguments 

// let getScoreText = function (name = 'Anonymous', score = 0) {
//    return 'Name: ' + name + ' - Score: ' + score
// }

// let scoreText = getScoreText();
// console.log(scoreText);

//challenge create tip calculator
//total, tipPercent .2

let tipCalculator = function (total, tipPercent = 0.2) {
    return total * tipPercent
}

let tipValue = tipCalculator(150)
console.log(tipValue);


let tipValue2 = tipCalculator(150, 0.3)
console.log(tipValue2);
