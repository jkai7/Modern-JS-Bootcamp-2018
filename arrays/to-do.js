const todos = ['walk the dog', 'brush teeth', 'do homework', 'shop for groceries']

// todos.splice(2, 1)
todos.push('go to muay thai')
// todos.shift()

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


//=> searching arrays part 1 =========================