var firstName = "Jens";

firstName = 'Mike';

var firstName = 'jen';// can re-assign new variable with same name

console.log(firstName);

//===========================

if (10 === 10) {
    var firstName = 'jim';// var is function scoped not block scoped
}

console.log(firstName);

//============================

const setName = function () {
    var firstName = 'jon';// function scoped
        console.log(firstName);

};

console.log(firstName);

//============================

console.log(age);// var declaration gets hoisted to top of scope

var age = 10// value doesnt get hoisted only the declaration 



