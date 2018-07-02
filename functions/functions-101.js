//function = input (argument(s)), code, output (return value)

let greetUser = function () {
    console.log('Welcome user!')
}

greetUser();

let square = function (num) {
    let result = num *num;
    return result;
}

let value = square(3);

console.log(value)