// Challenge Section
const todo = ["Buy pet food", "Walk the dog", "Study", "Exercise", "Wash clothes"];

// Challenge #1 - print 'you have "X" todos', first and second to last items

    // console.log(`You have ${todo.length} things to do.`);
    // console.log(`Todo #1: ${todo[0]} and Todo #4: ${todo[todo.length - 2]}`);

// Challenge #2 - delete 3rd item, add new item to end, and remove first item

    todo.splice(2, 1);
    todo.push("Take a shower");
    todo.shift();

// Challenge #3 - use for each, 1. first item, 2. second item, etc

    todo.forEach(function (item, index) {
        const position = index + 1;
        // console.log(`${position}. ${item}`);
    });

// Challenge #4 - re-create forEach outcome with a for loop

    for (let count = 0; count < todo.length; count++) {
        //console.log(`${count + 1}. ${todo[count]}`);
    };

// Challenge #5 - 

// Challenge #6 - 

// Challenge #7 - 

    