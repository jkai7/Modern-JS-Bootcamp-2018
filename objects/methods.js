//method is an object property whos value is a function

let restaurant = {
    name: 'BWW',
    guestCapacity: 75,
    geustCount: 0,
    seatParty: function (partySize) {
        let newGuestCount = this.geustCount + partySize
        console.log(newGuestCount)
        return newGuestCount
    },
    
    removeParty: function (partySize) { 
        console.log( this.geustCount - partySize)
        return  this.geustCount - partySize
    },
    
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.geustCount
        console.log(this.geustCount)
        return partySize <= seatsLeft
    }
};

//challenge

//seatParty adds to guest Count
//removeParty subtracts from guestCount

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))