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

    document.querySelector("#search-text").addEventListener("input", function (e) {
        //console.log(e.target.value); // after every change to the input, we can access the value of what what changed
    })

// FILTER DATA ------------------------------------------------------------------

    const filters = {
        serachText: ""
    }; // set up filters object to store the latest value of the input feild

    const renderNotes = function (notes, filters) {
        const filteredNotes = notes.filter(function (individualNote) {
            return individualNote.title.toLowerCase().includes(filters.serachText.toLowerCase())
        });// filters notes based on what is currently in the input feild

        document.querySelector("#notes").innerHTML = ""; // re-renters on every key stroke (clears div)

        filteredNotes.forEach(function (note) {
            const noteElement = document.createElement("p");
                noteElement.textContent = note.title
                document.querySelector("#notes").appendChild(noteElement)
        });// add the filtered notes in

    };// creates a way to render the data above while also taking into account the filters object

    renderNotes(notes, filters);// call renderNotes function

    document.querySelector("#search-text").addEventListener("input", function (e) {
        filters.serachText = e.target.value
        renderNotes(notes, filters)
    });// every time the text in the input feild value changes, the searchText in the filters object changes to match the input, and then it runs the renderNotes function to find matching notes to what is in the input feild






