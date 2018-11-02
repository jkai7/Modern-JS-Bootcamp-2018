let restaurant = {
    name: "ASB",
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) { // object property who's value is a function is a method
        let seatsLeft = this.guestCapacity - this.guestCount;
        return partySize <= seatsLeft;// creates boolean
    },
    seatParty: function (partySize) {
        this.guestCount = this.guestCount + partySize;//adds old guest count to new guest count
        console.log(this.guestCount);
    },
    removeParty: function (partySize) {
        this.guestCount = this.guestCount - partySize;
        console.log(this.guestCount);
    } 
};

// let status = restaurant.checkAvailability(4);
//     console.log(status);

    // challenge - seat party, remove party

    restaurant.seatParty(72);

    console.log(restaurant.checkAvailability(4));

    restaurant.removeParty(5);

    console.log(restaurant.checkAvailability(4));
