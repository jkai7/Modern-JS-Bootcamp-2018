let name = "Jens";
let age = 31

console.log(`hey, my name is ${name}! I'm ${age} years old.`);

let getScore = function (name = 'player1', score = 0) {
    return `Name: ${name} - Score: ${score}`
};

let scoreText = getScore(undefined, 99);
console.log(scoreText);

// challenge 
let tip = function (total, tipPercent = 0.2) {
    let percent = tipPercent * 100
    let tipValue = total * tipPercent 
       console.log(`A ${percent}% tip on ${total} would be $${tipValue}`);
};

tip(40, 0.25);
tip(60);