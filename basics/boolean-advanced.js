let isAccountLocked = false 
let userRole = "admin"

if (isAccountLocked) {
    console.log("Account is locked");
} else if (userRole === "admin") {
    console.log("welcome admin");
} else {
    console.log("welcome");
}