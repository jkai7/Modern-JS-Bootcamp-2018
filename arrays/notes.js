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

// const todoList = ['walk the dog', 'brush teeth', 'do homework', 'shop for groceries', 'wash clothes', 'go to muay thai']

// console.log(`you have ${todoList.length} things to do today`)

//=> challenge 3
// todoList.splice(2,1) // delete 3rd item
// todoList.push('exercise') // add new item to the end
// todoList.shift() // remove the first item 

// console.log(todoList)
// console.log(`Todo: ${todoList[0]}`)
// console.log(`Todo: ${todoList[todoList.length - 2]}`) // second to last item

//=> method calls =====================================

// const notes = ['note 1', 'note 2', 'note 3']

// //=> push & pop - manipulate end of array

// console.log(notes.pop())
// notes.push('my new note')

// console.log(notes.length)
// console.log(notes)

// //=> shift & unshift - manipulate begging of array
// console.log(notes.shift()) //=> delete first item in array
// notes.unshift('my first note') //=> make first item in array

// console.log(notes)

//=> splice - manipulate middle of array
// notes.splice(1, 1, 'new note two')//=> 3rd argument is optional
//     //=> first argument is index in array, second is how many items to delete
//     //=> if there is a third argument, it adds it to the array

// console.log(notes)

// notes[2] = 'new note 3'

// console.log(notes.length)
// console.log(notes)

//=> looping w/ forEach =================================================

// const notes = ['note 1', 'note 2', 'note 3']

// notes[2] = 'new note 3'


// notes.forEach(function(item, index){
//     console.log(index)
//     console.log(item)
// }) //=> argument takes a function its callback function - function that is passed through another function. it can also be described as a method

// console.log(notes.length)
// console.log(notes)


//=> for loop =========================================

// const notes = ['note 1', 'note 2', 'note 3']

// notes[2] = 'new note 3'


// console.log(notes.length)
// console.log(notes)
        

// for (let count = 0; count <= 2; count++) {
//     console.log(count)
// }// count up

// for (let count = 2; count >= 0; count--) {
//     console.log(count)
// }// count down

// for (let count = 0; count < notes.length; count++) {
//     console.log(notes[count]);
// }

// console.log('========================')

// for (let count = notes.length - 1; count >= 0; count--) {
//     console.log(notes[count]);
// }

//=> searching an array part 1 ================================

const notes = [{
    title: 'my next trip',
    body: 'I want to go to Spain'
}, {
    title: 'start fasting',
    body: 'I want to start fasting'
}, {
    title: 'JS tutorials',
    body: 'Take more javascript tutorials', 
}, {
    title: 'Follow Up',
    body: 'Follow up on all of the jobs you applied to'
}];

// console.log(notes.length)
// console.log(notes)


const index = notes.findIndex(function(note, index) {
    console.log(note)
    return note.title === 'started fasting!'
}); 
// findIndex() works with an array of objects
// indexOf is going to return items position in array
    // if you get - 1, the item doesnt exist in array

console.log(index)

