// Lesson Section
const notes = ["Note 1", "Note 2", "Note 3"];

// Basics ----------------------------------------------
notes.length //= gives length of array
notes[1]; //= gives second item in array
notes[notes.length - 1]; //= gives last item in array

// Manipulation ----------------------------------------
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

// Looping ---------------------------------------------
notes.forEach(function (item, index) {
    
}) // takes function as an argument, it is a CALLBACK FUNCTION - first arg. is the item, second arg. is the index(position of item)

// FOR Loop --------------------------------------------
for (let count = 0; count <= 2; count++) {
    // console.log(count);
}; // run loop specific number of times - 1st: initializer (number in which to start loop), 2nd: condition (how long loop should run), 3rd: final expression (modify the count)

for (let count = 2; count >= 0; count--) {
    
};// loop in reverse

for (let count = 0; count < notes.length; count++) {
    //console.log(notes[count]); // COUNT BECOMES THE INDEX(individual item) and we grab the item with its index using BRACKET NOTATION
}; // loop through array

for (let count = notes.length -1; count >= 0; count--) {
    //console.log(notes[count]); // count becomes index and we grab the item with its index using bracket notation
}; // loop through array in reverse
    