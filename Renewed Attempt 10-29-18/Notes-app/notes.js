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
 
//DOM  manipulation - document object model

// QUERY and REMOVE ------------------------------------
    // const p = document.querySelector("p");// first match of element 
    //     p.remove();

// QUERY ALL and REMOVE --------------------------------
    //const ps = document.querySelectorAll("p");

    // ps.forEach(function (p) {// delete all elements selected
    //     p.remove()
    // });

    // ps.forEach(function (p) {
    //     p.textContent = "**********"// overwrite what is in element

    //     console.log(p.textContent);// shows content in console
    // });

    // const takeWordAway = document.querySelectorAll("p");
    
    // takeWordAway.forEach(function (p) {
    //  if (p.textContent.toLowerCase().includes                ("the")) {
    //      p.remove()
    //      }
    //  });// take away element if it includes text

// ADD new element -------------------------------------
    // const newP = document.createElement("p");
    //     newP.textContent = "this is a new element"

    // document.querySelector("body").appendChild(newP)

// EVENT LISTENER(S) -----------------------------------

    // document.querySelector("#create-note").addEventListener("click", function (e) {
    //     e.target.textContent = "I was Clicked!!!"
    // });// addElistener - takes a string and a callback funtion that runs when event fires. e is the arg and stands for the event

    // // TARGETING w/ ID and CLASS

    // // document.querySelectorAll("button")[1].addEventListener("click", function (e) {
    // //     console.log("DELETE All Notes")
    // // });// only works if button is never moved. use id and classes instead

    // document.querySelector("#remove-all").addEventListener("click", function (e) {
    //     document.querySelectorAll(".note").forEach(function (note) {
    //         note.remove()
    //     });
    // });// selectes button w/ id then in the event listener, selects all elements with ".note" class, loops through all of them w/ a forEach and then removes each one 

    // Target SINGLE
        // p
        // #replace
        // .item

    // Target MULTIPLE
        // p#order
        // button.inventory
        // h1#title.application
        // h1.application#title

// INPUT ------------------------------------------------------------------------

    // document.querySelector("#search-text").addEventListener("input", function (e) {
    //     //console.log(e.target.value); // after every change to the input, we can access the value of what what changed
    // })

// FILTER DATA ------------------------------------------------------------------

    const filters = {
        searchText: ""
    }; // set up filters object to store the latest value of the input feild

    // const user = {
    //     name: "Jens",
    //     age: 31
    // }

    // const userJSON = JSON.stringify(user) // JSON(javascript object notation), stringify takes in object or array and converts it to a string so that it is able to be saved on local storage

    // console.log(userJSON)

    // localStorage.setItem('user', userJSON) // userJSON is a string representation of the original user object

    const userJSON = localStorage.getItem('user')

    const user = JSON.parse(userJSON) // parse converts JSON back to JS object  

    console.log(`${user.name} is ${user.age}`) // able to console log user object that was saved on local storage after parsing JSON string back into JS object

    const renderNotes = function (notes, filters) {
        const filteredNotes = notes.filter(function (individualNote) {
            return individualNote.title.toLowerCase().includes(filters.searchText.toLowerCase())
        });// filters notes based on what is currently in the input feild

        document.querySelector("#notes").innerHTML = ""; // re-renters on every key stroke (clears div)

        filteredNotes.forEach(function (note) {
            const noteElement = document.createElement("p");
                noteElement.textContent = note.title
                document.querySelector("#notes").appendChild(noteElement)
        });// add the filtered notes in

    };// creates a way to render the data above while also taking into account the filters object

    renderNotes(notes, filters);// call renderNotes function

    document.querySelector("#search-text").addEventListener("input", function(e) {
        filters.searchText = e.target.value
        renderNotes(notes, filters)
    });// every time the text in the input feild value changes, the searchText in the filters object changes to match the input, and then it runs the renderNotes function to find matching notes to what is in the input feild

// WORKING WITH FORMS -----------------------------------------------------------

    // document.querySelector('#name-form').addEventListener('submit', function (e) {
    //     e.preventDefault()// prevents the submit default behavior
    //     e.target.elements.firstName.value = ''// wipes data after submit
    // });
    // (form was deleted from html)

// CHECKBOXES -------------------------------------------------------------------

    document.querySelector('#for-fun').addEventListener('change', function (e) {
        e.target.checked
    });

// DROPDOWNS --------------------------------------------------------------------

    document.querySelector('#filter-by').addEventListener('change', function(e) {
        console.log(e.target.value)
    });

// LOCAL STORAGE CRUD METHODS ---------------------------------------------------

    // localStorage.setItem('location', 'Philadelphia') //first item is key, second is value - This is the C (create) and U (update) in CRUD

    // console.log(localStorage.getItem('location'))// is reading the value key from local storage, this is the R (read) in CRUD

    // localStorage.removeItem('location'); // removes the key from local storage, this is the D (delete) in CRUD

    // localStorage.clear()// removes everything, no matter what the key is

    // localStorage only stores strings so you need JSON stringify to turn objects and arrays into strings to store in local storage. Then, use parse to be able to continue to work with them stored in local storage and alsobe able to accesss object properties

    