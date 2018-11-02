let name = "Jens Kai Heilemann";

// length property
console.log(name.length);

// convert to uppercase
console.log(name.toUpperCase());

// convert to lowerrcase
console.log(name.toLowerCase());

// includes method
let password = "abc123tata789";

console.log(password.includes("password"));

// trim - removes whitespace at the ends of the string 
console.log(name.trim());

//= challenge - function is valid psswrd - if length is more than 8 and doesnt contain password
let isValidPassword = function (password) {
   if (password.length < 8 || password.includes("password")) {
       return `${password} is an invalid password.` 
   } else {
       return `Password Created!`
   };
};

console.log(isValidPassword("asdfp"));

console.log(isValidPassword("abc123TataMama"));

console.log(isValidPassword("abc123passwordTataMama"));

// alt solution
let isValidPassword = function (password) {
    if (password.length > 8 && !password.includes //if you have an if statement that chooses b/w two booleans you can simplify it
        ("password")) {
        return true
    } else {
        return false
    };
 };

 // the above expression can be simplified to:
 let isValidPassword = function (password) {
   return password.length > 8 && !password.includes("password");
 };
