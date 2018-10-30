let temp = 55;

if (temp >=60 && temp <= 90) {
    
    console.log("it's really nice outside");

} else if (temp <= 60 || temp >= 90) {
   
    console.log("you should stay inside");

} else {
    
    console.log("error, invalid entry");

};

//= challenge

let isGuestOneVegan = true;
let isGuestTwoVegan = false;

if (isGuestOneVegan && isGuestTwoVegan) {
    
    console.log("Offer only vegan dishes");

} else if (isGuestOneVegan || isGuestTwoVegan) {
    
    console.log("Offer both types of dishes");

} else {
    
    console.log("Offer only meat dishes");

};