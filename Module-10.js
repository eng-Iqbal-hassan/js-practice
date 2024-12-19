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
console.log(lufthansa);

lufthansa.book(345,'Noman');
console.log(lufthansa);

// let say the lufthansa has new booking airline 

// so the object for eurowing is like

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: []
}
console.log(eurowings);

// now to make book function dynamic we store it in a variable be like,

const book = lufthansa.book;
// now let say call this function 
// book(23, 'Marry'); 
// It is giving me the error. the reason that book is just the copy and not the same function as book function in the object. So this keyword in regular function call returns undefine . So this error does occur.

// So we need to explicitely tell to the javascript that this keyword points to lufthansa object when booking for lufthansa and pointing to eurowing when booking for its flight.

// To fix the thing we use the method call method on book function -> As functions are objects and we can apply methods on the object so we can apply method on the functions

// so instead of calling book function we call book.call whose first param is the object in which a passenger book a flight and other two params are same.

book.call(eurowings, 23, 'hassan');
console.log(eurowings)

// So the issue of the this keywword in  regualr function is resolved by call method


// Apply method -> instead of separate arguments apply method takes the array and use them as argument.

const flightData = [875, 'Ayyyan']
const flightData2 = [875, 'Adil']
 
book.apply(lufthansa, flightData)
console.log(lufthansa)

// apply method can simply be avoided using spread operator in call method

book.call(lufthansa, ...flightData2)
console.log(lufthansa)