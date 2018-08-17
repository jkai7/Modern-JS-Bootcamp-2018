const todos = [{
    text:'Walk the dog',
    complete: true},
{
    text:'Brush teeth',
    complete: false},
{
    text:'Do homework',
    complete: true},
{
    text:'Shop for groceries',
    complete: false},
{
    text: 'Practice Muay Thai',
    complete: false
}];


//= Sorting arrays ==============================================================

const sortTodos = function (todos) {
    todos.sort(function(a, b) {
        if (a.complete === false > b.complete === true) { // use && instead of > or < with boolean values - (!a.complete && b.complete)
            return -1
        } else if (b.complete === false > a.complete === true) {
            return 1
        } else {
            return 0
        }
    })
}

sortTodos(todos)
console.log(todos)


//= filter array ==============================================================

// const thingsLeftTodo = function (todosLeft) {

//     return todos.filter(function(todo, index) { // dont need to put index if not needeed
//         return todo.complete === false // or return !todo.complete
//     })

// }

// console.log(thingsLeftTodo(todos))

//= END fiter =================================================================

// const deleteTodos = function (todos, todoText) {
//     const index = todos.findIndex(function(todo) {
//         return todo.text.toLowerCase() === todoText.toLowerCase()
//     })
//     if (index > -1) { //if todo item exists 
//         todos.splice(index, 1)
//     }
// }

// const done = deleteTodos(todos, 'do homework')
// console.log(todos)

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

//=> for loop =================================================================

    // for (let count = 0; count < todos.length; count++) {
    //     // const num = count + 1 
    //     // const todo = todos[count]
    //     // console.log(`${num}. ${todo})
    //     console.log(`${[count + 1]}. ${todos[count]}`)
    // }


//=> searching arrays part 2 solution(s) =====================================

// const deleteTodos = function (todos, todoText) {
//     const index = todos.findIndex(function(todo) {
//         return todo.text.toLowerCase() === todoText.toLowerCase()
//     })
//     if (index > -1) { //if todo item exists 
//         todos.splice(index, 1)
//     }
// }
