//method is an object property whos value is a function

let restaurant = {
    name: 'BWW',
    guestCapacity: 75,
    guestCount: 0,
    seatParty: function (partySize) {
        this.guestCount = this.guestCount + partySize
        return this.guestCount
    },
    
    removeParty: function (partySize) { 
        this.guestCount = this.guestCount - partySize
        return   this.guestCount
    },
    
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        console.log(this.guestCount)
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