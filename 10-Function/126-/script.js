// 'use strict';

// ---------------128. Default Parameters-------------
// const bookings = [];

// const createBooking = function(
//     fightNum,
//     numPassengers = 1,
//     price = 199){
//     const booking = {
//         fightNum,
//         numPassengers,
//         price,
//     }

//     console.log(booking);
//     bookings.push(booking);
// }

// createBooking('LH123');
// createBooking('LH123', 2 , 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);



// ---------------129. Default Parameters-------------
const flight = 'LH234';
const jonas = {
    name: 'Jonas Schop',
    passport: 132465798,
};

const checkIn = function(flightNum, passenger){
    flightNum = "LH999";
    passenger.name = 'MR. ' + passenger.name;

    if(passenger.passport === 132465798){
        alert('checked in');
    }else{
        alert('Wrong passport!')
    }
}

checkIn(flight,jonas);
console.log(flight);
console.log(jonas);

// // is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 100000000);
};

newPassport(jonas);

checkIn(flight ,jonas);
console.log(jonas)
