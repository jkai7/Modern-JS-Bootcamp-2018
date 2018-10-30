// multiple arguments
let add = function (a, b, c) {
    return a + b + c;
}

let result = add(10, 1, 5);

console.log(result);

// defaults arguments
let getScore = function (name = 'player1', score = 0) {
    return "name: " + name + " - score: " + score
};

let scoreText = getScore(undefined, 99);
console.log(scoreText);

// challenge - tip calculator

let tip = function (total, tipPercent = 0.2) {
    return total * tipPercent 
};

console.log(tip(100));
console.log(tip(100, 0.1));
console.log(tip(100, 0.3));
