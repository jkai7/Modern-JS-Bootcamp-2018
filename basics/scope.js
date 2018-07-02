//js uses lexical(static) scoping

//global scope - contains all things defined outside all code blocks
    //local scope - defined inside code block

// let varOne = 'varOne';//global variable

// if (true) {
//     console.log(varOne);
//     let varTwo  = 'varTwo'// local scope variable
//     console.log(varTwo);

//     if (true) {
//         let varFour = 'varFour';
//     }
// }

// if (true) {
//     let varThree = 'varThree'
// }

// console.log(varTwo);

// let name = 'Jens'

if (true) {
    // let name = 'Hans'// variable shadowing *** overides parent variable
    if (true) {
         let name = 'Jen'//leaked global w/o let or const - prevent leaked by declaring variable(let or const)
        console.log(name);
    }
}

if (true) {
    console.log(name);//can only access global variable
}

