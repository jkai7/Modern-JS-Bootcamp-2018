//js uses lexical(static) scoping

//global scope - contains all things defined outside all code blocks
//local scope - defined inside code block

let varOne = 'varOne';

if (true) {
    console.log(varOne);
    let varTwo  = 'varTwo'
    console.log(varTwo);
}

// console.log(varTwo);