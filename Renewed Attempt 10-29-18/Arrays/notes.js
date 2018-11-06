// Lesson Section
const notes = ["Note 1", "Note 2", "Note 3"];

// Basics ---------
notes.length //= gives length of array
notes[1]; //= gives second item in array
notes[notes.length - 1]; //= gives last item in array

// Manipulation ----------
    // Methods

        // PUSH and POP manipulate END of array
notes.push("My new note"); //= adds item to end of array
notes.pop(); //= removes last item from array

        // SHIFT and UNSHIFT manipulate BEGINNING of array
notes.shift(); // Removes first item 
notes.unshift("My first note"); // Adds item to beginning of array

        // SPLICE manipulates MIDDLE of array
notes.splice(1, 1, "New note") // First arg. is where youre trying to start the action, second - is how many things you want to remove, third - is what you want to add

// Change value of given item with bracket notation
notes[2] = "This is now the new Note 3"

// Looping ------------
notes.forEach(function (item, index) {
    
}) // takes function as an argument, it is a callback function - first arg. is the item, second arg. is the index(position of item)
    