// multiple arguments
let add = function (a, b, c) {
    return a + b + c;
}

let result = add(10, 1, 5);

console.log(result);

// defaults arguments
let getScore = function (name = 'player1', score = 0) {
    return "name: " + name + " score: " + score
};

let scoreText = getScore();
console.log(scoreText);

