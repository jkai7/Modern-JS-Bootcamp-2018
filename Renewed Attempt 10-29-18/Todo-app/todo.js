const todos = [{
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

    // const howManyTodos = todo.filter(function (item, index) {
    //          return !item.completed
    //     });

    // const summary = document.createElement("h2");

    //     summary.textContent = `You Have ${howManyTodos.length} Todos left`;

    //     document.querySelector("body").appendChild(summary);


    // todo.forEach(function (item, index) {

    //     const todoList = document.createElement("p")
    //         todoList.textContent = item.text

    //     // console.log(item.text)

    //     document.querySelector("body").appendChild(todoList)
    // });

//CHALLENGE #2 - add button and add event listener that logs "I've added a todo"

    // document.querySelector("button").addEventListener("click", function (e) {
    //     console.log("I've added a new todo!")
    // });

//CHALLENGE #3 - add id on to button, then target it by its id

    // document.querySelector("#add-todo").addEventListener("click", function (e) {
    //     //console.log("New Todo Added!")
    // });

// CHALLENGE #4 - add input and show changing value in console

    // document.querySelector("#new-todo").addEventListener("input", function (e) {
    //     //console.log(e.target.value);
    // });

// CHALLENGE #5 - 1. set up a div to contain the todos. 2. create a filters object that has a search text property and wire up a new filter input to change it. 3. create a renderTodos function to render and re-render the latest filtered data

    const filters = {
        searchText: ''
    };// end filters

    const renderTodos = function (todos, filters) {
        const filteredTodos = todos.filter(function (todo) {
            return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        })// end filtered todos

        document.querySelector('#todos').innerHTML = '';

        const inCompleteTodos = filteredTodos.filter(function (todo, index) {
            return !todo.completed
        })// end inCompleteTodos
    
        const summary = document.createElement('h2');
            summary.textContent = `You Have ${inCompleteTodos.length} Todos left`;
            document.querySelector('#todos').appendChild(summary);
    
        filteredTodos.forEach(function (todo) {
            const p = document.createElement('p')
            p.textContent = todo.text
            document.querySelector('#todos').appendChild(p)
        })// end forEach

    };// end render todos

    renderTodos(todos, filters);

    document.querySelector('#search-text').addEventListener('input', function (e){
        filters.searchText = e.target.value
        renderTodos(todos, filters)
    });// end search text


