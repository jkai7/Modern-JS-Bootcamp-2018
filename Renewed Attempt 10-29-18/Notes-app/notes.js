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
    const newP = document.createElement("p");
        newP.textContent = "this is a new element"

    document.querySelector("body").appendChild(newP)


