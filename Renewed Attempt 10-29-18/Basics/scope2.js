// global scope
    // local scope
        //local scope
   // local scope

//let name = "jens";

if (true) {
    //let name = "mike";
    if (true) {
        name = "jen" // leaked global (variable never explicitly defined)
        console.log(name); // local scope name (variable shadowing)
    };
};

if (true) {
    console.log(name); // global scope name
};