// undefined for variable
let name = "jens";

if (name === undefined) {
    console.log("please provide a name");
} else {
    console.log(name);
};

// undefined for function
let square = function (num) {
    console.log(num);
};

square();

let age = 27;

age = null;

console.log(age);
