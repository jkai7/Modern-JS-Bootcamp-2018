//method is an object property whos value is a function

let restaurant = {
    name: 'BWW',
    guestCapacity: 75,
    geustCount: 0,
    seatParty: function (partySize) {
        let guestsAdded = this.geustCount + partySize
        console.log(guestsAdded)
        return guestsAdded
    },
    removeParty: function (partySize) { 
        let guestsRemoved = this.geustCount - partySize
        console.log(this.geustCount)
        return this.geustCount
    },
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.geustCount
        return partySize <= seatsLeft
    }
};

//challenge

//seatParty adds to guest Count
//removeParty subtracts from guestCount

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(72)
console.log(restaurant.checkAvailability(4))