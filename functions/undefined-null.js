//undefined for variable

let name

name = 'Jens'

if (name === undefined) {
    console.log("please provide a name")
} else {
    console.log(name);
}

//undefined for function arguments

let square = function (num) {
    console.log(num)
}
let result = square();
console.log(result)//undefined as function return value

let age = 31

age = null //explicity cleared 

console.log(age);
