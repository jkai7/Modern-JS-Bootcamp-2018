const todos = ['walk the dog', 'brush teeth', 'do homework', 'shop for groceries']

// todos.splice(2, 1)
todos.push('go to muay thai')
// todos.shift()

// console.log(`you have ${todos.length} todos!`)

//=> 4. looping through arrays challenge
    //=> print index of item then item next to it 

    //=> my solution
    todos.forEach(function(item, index){
        console.log(`${index + 1}. ${item}`)
    });
    
    console.log('========================')
    
    //=> video solution
    todos.forEach(function(todo, index){
        const num = index + 1
        console.log(`${num}. ${todo}`)
    });