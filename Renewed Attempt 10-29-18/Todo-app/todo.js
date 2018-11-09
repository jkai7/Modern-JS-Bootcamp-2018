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

// CHALLENGE #1 - print: you have 2 todos left (in p element), add p for each todo above (use text value)


    const howManyTodos = todo.filter(function (item, index) {
             return !item.completed
        });

    //console.log(howMany.length)

    const summary = document.createElement("h2");

        summary.textContent = `You Have ${howManyTodos.length} Todos left`;

        document.querySelector("body").appendChild(summary);


    // todo.forEach(function (item, index) {

    //     const todoList = document.createElement("p")
    //         todoList.textContent = todo[index].text

    //     //console.log(todo[index].text)

    //     document.querySelector("body").appendChild(todoList)
    // }); // NOT using item in foreach


    // alt solution

    todo.forEach(function (item, index) {

        const todoList = document.createElement("p")
            todoList.textContent = item.text

        // console.log(item.text)

        document.querySelector("body").appendChild(todoList)
    });

//CHALLENGE #2 - add button and add event listener that logs "I've added a todo"

    document.querySelector("button").addEventListener("click", function (e) {
        console.log("I've added a new todo!")
    });

    



