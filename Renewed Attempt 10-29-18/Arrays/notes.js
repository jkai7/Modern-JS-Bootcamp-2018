// LESSON SECTION
const notes = [{
        title: "My next trip",
        body:  "I want to go back to Rhode Island"
}, {
        title: "Habbits to work on",
        body: "Exercise, Eat Better, Study Harder"
}, {
        title: "Office Modifications",
        body: "Get a new seat"
}];

// // BASICS ----------------------------------------------
//         notes.length //= gives length of array
//         notes[1]; //= gives second item in array
//         notes[notes.length - 1]; //= gives last item in array

// // MANIPULATION ----------------------------------------
//     // METHODS()
//         // PUSH and POP manipulate END of array
//         notes.push("My new note"); //= adds item to end of array
//         notes.pop(); //= removes last item from array

//         // SHIFT and UNSHIFT manipulate BEGINNING of array
//         notes.shift(); // Removes first item 
//         notes.unshift("My first note"); // Adds item to beginning of array

//         // SPLICE manipulates MIDDLE of array
//         notes.splice(1, 1, "New note"); // First arg. is where you start the action, second - is how many things you want to remove, third - is what you want to add

//         // Change value of given item with bracket notation
//         notes[2] = "This is now the new Note 3";

// // LOOPING ---------------------------------------------
//         notes.forEach(function (item, index) {
        
//         }); // takes function as an argument, it is a CALLBACK FUNCTION - first arg. is the item, second arg. is the index(position of item)

// // FOR Loop --------------------------------------------
//         for (let count = 0; count <= 2; count++) {
//         // console.log(count);
//         }; // run loop specific number of times - 1st: initializer (number in which to start loop), 2nd: condition (how long loop should run), 3rd: final expression (modify the count)

//         for (let count = 2; count >= 0; count--) {
        
//         };// loop in reverse

//         for (let count = 0; count < notes.length; count++) {
//         //console.log(notes[count]); // COUNT BECOMES THE INDEX(individual item) and we grab the item with its index using BRACKET NOTATION
//         }; // loop through array

//         for (let count = notes.length -1; count >= 0; count--) {
//         //console.log(notes[count]); // count becomes index and we grab the item with its index using bracket notation
//         }; // loop through array in reverse

// SEARCHING Arrays PART 1  and PART 2 -----------------
        
        // // indexOf - returns an items position in array, if there are multiple, it returns the first one. if it doesn't exist, it returns a -1. Will always use === to find match. however, when searching objects, {} === {} = false. objects only equal other objects if they are exactly the same object. Use indexOf for an array of STRINGS
        // notes.indexOf();  

        // // findIndex - allows you to work with an array of objects. Finds first match and stops running otherwise returns -1 if item not found. Use findIndex for an array of OBJECTS 
        // const indexOfNote = notes.findIndex(function (note, index) {
        //         return note.title === "Habbits to work on";
        // });
        // // console.log(indexOfNote);

        // const findNote = function (thing, noteTitle) {
        //         const index = thing.findIndex(function (note, index) {
        //                 return note.title.toUpperCase() === noteTitle.toUpperCase()
        //         });
                
        //         return thing[index];
        // };// is a function that returns the entire object in an array. Undefined if not in array of objects

        // const theNote = findNote(notes, "office modifications");
        // // console.log(theNote);

        // //FIND - works in a similar way to function above, however, it returns the value of the first element found instead of returning an index
        // const foundNote = function (thing, noteTitle) {
        //         return thing.find(function (note, index) {
        //                 return note.title.toUpperCase() === noteTitle.toUpperCase()
        //         });
        // };

        // const found = foundNote(notes, "office modifications");
        // // console.log(found);

        // // alt 
        // const foundTheNote = function (thing, noteTitle) {
        //         const note = thing.find(function (note, index) {
        //                 return note.title.toUpperCase() === noteTitle.toUpperCase()
        //         });
        //         return note
        // };

        // const founds = foundTheNote(notes, "office modifications");
        // console.log(founds);

// FILTERING -------------------------------------------

        // FILTER - creates new array with all elements that pass the test implemented by the provided function
        const filteredNotes = notes.filter(function (note, index) {
                const isTitleMatch = note.title.toLowerCase().includes("ne")// this is called method chaining
                const isBodyMatch = note.body.toLowerCase().includes("ne")
                        return isTitleMatch || isBodyMatch
        });

        //console.log(filteredNotes)

        const findNotes = function (notes, query) {
                return notes.filter(function (note, index) {
                        const isTitleMatch = note.title.toUpperCase().includes(query.toUpperCase())
                        const isBodyMatch = note.body.toUpperCase().includes(query.toUpperCase())
                                return isTitleMatch || isBodyMatch
                });
        };

        //console.log(findNotes(notes, "work"))

// SORTING ---------------------------------------------

        //SORT - sorts the elements of an array, similar to indexOf. takes in a function which lets us to specify the exact comparison behavior(takes an optional compare function)       
        const sortNotes = function (notes) {
                notes.sort(function (a, b) {// function for sort is a compare function (if one thing should come before or after a thing)
                        if (a.title.toLowerCase() < b.title.toLowerCase()) {
                                return -1
                        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
                                return 1
                        } else {
                                return 0
                        }//if a comes first: -1, if b comes first: 1, if the order is neither one: 0
                });
        };            

        // console.log('a' < 'b') // < = before - returns true
        // console.log('March' < 'January') // J comes first, returns false 
        // console.log('a' < 'A')// capital letters come first - returns false
        // console.log(false < true) // false comes before true, returns true

        sortNotes(notes);
        console.log(notes)

    