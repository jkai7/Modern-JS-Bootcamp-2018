// let temp = 75;

// if (temp >= 60 && temp <=90) {
//     console.log("It's nice outside")
// } else if (temp <= 0 || temp >= 120) {
//     console.log("Its dangerous to go outside")
// } else {
//     console.log("Do what you want")
// }

//challenge 

let guestOneIsVegan = true;
let guestTwoIsVegan = false;

if (guestOneIsVegan && guestTwoIsVegan) {
    console.log("Offer only vegan dishes")
} else if (guestOneIsVegan || guestTwoIsVegan) {
    console.log("Offer some vegan dishes");
} else {
    console.log("Offer no vegan dishes")
}