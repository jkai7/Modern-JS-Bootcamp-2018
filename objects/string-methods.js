// let name = ' Jens Kai '

// //=> length property
// console.log(name.length);

// //=> convert to uppercase
// console.log(name.toUpperCase());

// //=> convert to lower case
// console.log(name.toLowerCase());

// //=> includes method
// let password = 'abc123'
// console.log(password.includes('password'));

// //=> trim method removes white space from both ends
// console.log(name.trim());

//=> challenge area

//=> isValidPassword
    //=> only return true if length is more than 8
    //=> does not contain the word password

    //=> my solution =================================
    function isValidPassword (password) {
        if (password.length >= 8 && !password.includes('password')) {
            return true
        } else {
            return false 
        }
    };

    console.log(isValidPassword('asdfp'))
    console.log(isValidPassword('aabc123!@#$%'))
    console.log(isValidPassword('asdfpgfdhgpassword'))

    //=> instructor solution

 //=> solution #1 ==================================== 
 let isValidPassword2 = function (password) {
        if (password.length >= 8 && !password.includes('password')) {
            return true
        } else {
            return false
        }
    }; 

    console.log(isValidPassword2('asdfp'))
    console.log(isValidPassword2('aabc123!@#$%'))
    console.log(isValidPassword2('asdfpgfdhgpassword'))

//=> solution #2 =====================================
let isValidPassword3 = function (password) {
    return password.length >= 8 && !password.includes('password')
};

    console.log(isValidPassword3('asdfp'))
    console.log(isValidPassword3('aabc123!@#$%'))
    console.log(isValidPassword3('asdfpgfdhgpassword'))