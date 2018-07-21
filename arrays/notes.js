// const notes = ['note 1', 'note 2', 'note 3']

// console.log(notes)
//     //=> ['note 1', 'note 2', 'note 3']
// console.log(notes.length)
//     //=> 3
// console.log(notes[1])
//     //=> note 2
// console.log(notes[notes.length - 1])
    //=> access last item of array (note 3)

//=> Challenge ======================================
    //=> create an array w/ 5 to-do's
    //=> You have x to-do's
    //=> print first and second to last items
        //=> To-do: walk the dog

// const todoList = ['walk the dog', 'brush teeth', 'do homework', 'shop for groceries', 'wash clothes']

// console.log(`you have ${todoList.length} things to do today`)
// console.log(`Todo: ${todoList[0]}`)
// console.log(`Todo: ${todoList[todoList.length - 2]}`)

//=> method calls =====================================

const notes = ['note 1', 'note 2', 'note 3']

// //=> push & pop - manipulate end of array

// console.log(notes.pop())
// notes.push('my new note')

// console.log(notes.length)
// console.log(notes)

// //=> shift & unshift - manipulate begging of array
// console.log(notes.shift())
// notes.unshift('my first note')

// console.log(notes)

//=> splice - manipulate middle of array
notes.splice(1, 1, 'new note two')//=> 3rd argument is optional
    //=> first argument is index in array, second is how many items to delete
    //=> if there is a third argument, it adds it to the array

console.log(notes)



