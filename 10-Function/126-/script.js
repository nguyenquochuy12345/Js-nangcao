'use strict';

const bookings = [];

const createBooking = function(
    fightNum,
    numPassengers = 1,
    price = 199){
    const booking = {
        fightNum,
        numPassengers,
        price,
    }

    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123', 2 , 800);
createBooking('LH123', 2);
createBooking('LH123', 5);