// CHALLENGE SECTION
const todo = [{
    text: "Buy pet food",
    completed: true
}, {
    text: "Walk the dog",
    completed: false
}, {
    text: "Study",
    completed: true
}, {
    text: "Exercise",
    completed: false
}, {
    text: "Wash clothes",
    completed: false
}];

// CHALLENGE #1 - print 'you have "X" todos', first and second to last items

    // console.log(`You have ${todo.length} things to do.`);
    // console.log(`Todo #1: ${todo[0]} and Todo #4: ${todo[todo.length - 2]}`);

// CHALLENGE #2 - delete 3rd item, add new item to end, and remove first item

//     todo.splice(2, 1);
//     todo.push("Take a shower");
//     todo.shift();

// // CHALLENGE #3 - use for each, 1. first item, 2. second item, etc

//     todo.forEach(function (item, index) {
//         const position = index + 1;
//         // console.log(`${position}. ${item}`);
//     });

// CHALLENGE #4 - re-create forEach outcome with a for loop

    // for (let count = 0; count < todo.length; count++) {
    //     console.log(`${count + 1}. ${todo[count]}`);
    // };

// CHALLENGE #5 - convert array to array of objects, add text and completed property, create function that removes todo by text value

    // const deleteTodo = function (todoList, todoText) { 
    //     const item = todoList.find(function (todo, index) {
    //        return todo.text.toUpperCase() === todoText.toUpperCase()
    //     });
    //     return item.shift()
    // }; 

   
    // deleteTodo(todo, "exercise"); // FAILED ATTEMPT
    // console.log(todo); 

    // SOLUTION 
    // const deleteTodo2 = function (todoList, todoText) {
    //     const index = todoList.findIndex(function (todo) {
    //         return todo.text.toUpperCase() === todoText.toUpperCase()
    //     });

    //     if (index > -1) {// if item exists
    //         todoList.splice(index, 1) // delete item by index found with above method (in this case, findIndex)
    //     };
    // };

    // deleteTodo2(todo, "exercise");
    // console.log(todo);

// CHALLENGE #6 - 

    // const getThingsTodo = function (todos) {
    //     return todos.filter(function (item, index) {
    //         const unfinished = item.completed === false
    //             return unfinished
    //     });
    // };

    // console.log(getThingsTodo(todo))

    // alt solution(s)
    // const getThingsTodo = function (todos) {
    //     return todos.filter(function (item, index) {
    //         return !item.completed
    //     });
    // };

    // //console.log(getThingsTodo(todo))

// CHALLENGE #7 - sort by completed property

    // const sortTodos = function (todos) {
    //     todos.sort(function (a, b) {
    //         if (a.completed < b.completed) {
    //             return -1 
    //         } else if (b.completed < a.completed) {
    //             return 1
    //         } else {
    //             return 0
    //         };
    //     });
    // };
    
    // sortTodos(todo);
    // //console.log(todo);

    // // alt solution
    // const sortTodos2 = function (todos) {
    //     todos.sort(function (a, b) {
    //         if (!a.completed && b.completed) {
    //             return -1 
    //         } else if (!b.completed && a.completed) {
    //             return 1
    //         } else {
    //             return 0
    //         };
    //     });
    // };
    
    // sortTodos2(todo);
    // //console.log(todo);



    