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
        searchText: '',
        hideCompleted: false
    };// end filters

    const renderTodos = function (todos, filters) {

        const filteredTodos = todos.filter(function (todo) {
            const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
            const hideCompletedMatch = !filters.hideCompleted || !todo.completed
            
            return searchTextMatch && hideCompletedMatch
        })

        // ALT SOLUTION #1
        
        // let filteredTodos = todos.filter(function (todo) {
        //     return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        // })// end filtered todos

        // filteredTodos = filteredTodos.filter(function (todo) {
        //     return !filters.hideCompleted || !todo.completed //always returns false for todos that have been completed and always true for todos that have not been completed

        // ALT SOLUTION #2

        //     if (filters.hideCompleted){
        //         return !todo.completed
        //     }else{
        //         return true
        //     }

        //  })

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

// CHALLENGE #6 - 1.create a form with single input for todo text, 2.set up a submit handler and cancel the default action, 3.add a new item to the todos array with the text data (completed value of false), 4.render the application, 5.clear input field value

    document.querySelector('#new-todo').addEventListener('submit', function (e) {
        e.preventDefault()// prevent default form behavior
        todos.push({
            text: e.target.elements.addTodo.value,
            completed: false
        })// push the new object into todos array of objects
        renderTodos(todos, filters)// re-render list 
        e.target.elements.addTodo.value = ''//reset value of input 
    })
 
// CHALLENGE #7 - 1.create a checkbox and set up event listener -> "hide completed", 2.create new hide completed filter (default false), 3. update hideCompleted and rerender list on checkbox change, 4. setup renderTodos to remove completed items

    document.querySelector('#hide-completed').addEventListener('change', function (e) {
        filters.hideCompleted = e.target.checked
        renderTodos(todos, filters)
    });
