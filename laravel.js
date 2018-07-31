const giveMeANumber = function (num) {
    return num
}

// const mathOperation = function (operator) {
//     if (operator === '+') {
//         return 
//     }
// }

// const giveMeASecondNumber = function (num2) {
//     return num2
// }


const mathProblem = function (giveMeANumber, mathOperator, giveMeASecondNumber) {
   if (mathOperator === '+') {
        return giveMeANumber + giveMeASecondNumber
   } else if (mathOperator === '-') {
        return giveMeANumber - giveMeASecondNumber
   } else if (mathOperator === '/') {
        return giveMeANumber / giveMeASecondNumber
   } else if (mathOperator === '*') {
        return giveMeANumber * giveMeASecondNumber
   } else {
       return 'input invalid'
   }
};

const result = mathProblem(5,'+', 3 );
console.log(result)