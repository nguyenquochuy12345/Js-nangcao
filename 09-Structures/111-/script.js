'use strict';

const weekdays = ['mon','tue','wed','thu','fri','sat','sun'];

const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[5]]: {
        open: 0,
        close: 12+12,
    },
};

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Breschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    
    // Ky tu doi tuong nang cao ES6
    openingHours,

    order (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery({ 
        starterIndex = 1,
        mainIndex = 0, 
        time = '20:00', 
        address,
     }) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} to ${address} at ${time} `)
    },

    orderPasta(ing1, ing2, ing3) {
        console.log(`Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3} `
        );
    },
    orderPizza(mainIngredinet, ...otherIngredinets) {
        console.log(mainIngredinet);
        console.log(otherIngredinets);
    }

};

// Property NAMES

const property = Object.keys(openingHours);
console.log(property);

let openStr = `We are open on ${property.length} days : `;

for(const day of property){
    openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours); 
// console.log(entries);

// [key, value]
for(const [key , {open , close }] of entries){
    console.log(`On ${key} we open at ${open} and close at ${close}`);
}



















//  ////////////////////////////////////////////////////////
//  ---------------------Optional Chaining (?.)-------------------------------

// if(restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// // console.log(restaurant.openingHours.mon.open);

// // WITH optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// //  Example
// const days = ['mon','tue','wed','thu','fri','sat','sun'];
// for(const day of days){
//     const open = restaurant.openingHours[day]?.open ?? 'closed';
//     console.log(`On ${day}, we open at ${open}`)
// }

// //  Methods
// console.log(restaurant.order?.(0,1) ?? 'Methods dose not exist');
// console.log(restaurant.orderBread?.(0,1) ?? 'Methods dose not exist');
// //  Array
// const users = [
//     {name: 'Huy', email: 'Huyhienhau@gmail.com'}
// ];
// console.log(users[0]?.name ?? 'User array empty');
// if(users.length > 0 ){
//     console.log(users[0]?.name)
// }else{
//     console.log('User array empty');
// }
// ;


  




// -----------------For of ------------------->>

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i ,j] of menu.entries()) {
//     console.log(`${(i + 1)}: ${j} `);
// }

// // console.log([...menu.entries()]); 


