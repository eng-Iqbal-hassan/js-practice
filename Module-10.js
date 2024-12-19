'use strict'

// create an object for a flight 
const lufthansa = {
    airline: 'lufthansa',
    iataCode: 'LH',
    bookings : [],
    // book : function () older way the new way is mentioned below
    book(flightNum , name){
        console.log(`${name} has booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`)
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
        // we have get the passenger who has booked the flight also this function is keep adding object in the bookings array od the detail of the passenger 
    }
}

lufthansa.book(345,'Noman');
console.log(lufthansa);