const todos = [{
text:'walk the dog',
completed: true},
{
text:'brush teeth',
completed: false},
{
text:'do homework',
completed: true},
{
text:'shop for groceries',
completed: false}];

const deleteTodos = function (todos, todoText) {
    const index = todos.findIndex(function(todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    if (index > -1) { //if todo item exists 
        todos.splice(index, 1)
    }
}

const done = deleteTodos(todos, 'do homework')
console.log(todos)

// todos.splice(2,1)
// todos.push('go to muay thai')
// todos.shift()
// console.log(todos)

// console.log(`you have ${todos.length} todos!`)

//=> 4. looping through arrays challenge
    //=> print index of item then item next to it 

    //=> my solution
    // todos.forEach(function(item, index){
    //     console.log(`${index + 1}. ${item}`)
    // });
    
    
    // //=> video solution
    // todos.forEach(function(todo, index){
    //     const num = index + 1
    //     console.log(`${num}. ${todo}`)
    // });

//=> for loop ==============================

    // for (let count = 0; count < todos.length; count++) {
    //     // const num = count + 1 
    //     // const todo = todos[count]
    //     // console.log(`${num}. ${todo})
    //     console.log(`${[count + 1]}. ${todos[count]}`)
    // }


//=> searching arrays part 2 solution(s) =========================

// const deleteTodos = function (todos, todoText) {
//     const index = todos.findIndex(function(todo) {
//         return todo.text.toLowerCase() === todoText.toLowerCase()
//     })
//     if (index > -1) { //if todo item exists 
//         todos.splice(index, 1)
//     }
// }
