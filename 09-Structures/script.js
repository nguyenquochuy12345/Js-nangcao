'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian','Organic'],
    starterMenu: ['Focaccia','Breschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours:{
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        },
    },

    order: function(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery: function ({starterIndex,mainIndex,time,address}){
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} to ${address} at ${time} `)
    },

    orderPasta: function(ing1, ing2, ing3){
        console.log(`Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3} `
        );
    },
    orderPizza: function(mainIngredinet, ...otherIngredinets){
        console.log(mainIngredinet);
        console.log(otherIngredinets);
    }

};

restaurant.numGuests = 0;
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// Nullish : null and undefined (NOT 0 and '')
const guests3 = restaurant.numGuests ?? 10;
console.log(guests3);






// //  Use Any data type, return ANY data type, short-ciruiting
// console.log('---- OR ----');
// console.log(3 || 'Huy' );
// console.log('' || 'Huy' );
// console.log(true || 0 );
// console.log(undefined || null );

// console.log(undefined || 0 || '' || 'Huy' || 20 || null);

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('---- AND ----');
// console.log(3 && 'Huy' );
// console.log(0 && 'Huy' );

// console.log(23 && "Huy" && false && 21 );
// if( restaurant.orderPizza){
//     restaurant.orderPizza('Khong thit', 'Co thit')
// }
// restaurant.orderPizza && restaurant.orderPizza('Khong thit', 'Co thit')








// ///////////////////////////////////////////////////////
// // SPREAD, becase on RIGHT side of =
// const arr = [1,2, ...[3,4]];

// // REST, because on LEFT side of =
// const [a,b, ...others] = [1,2,3,4,5];
// console.log(a,b, others);

// const [pizza , ,risotto, ...otherFood ] = [...restaurant.mainMenu, ...restaurant.starterMenu]
// console.log(pizza,risotto,otherFood)

// // Object
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // Functions
// const add = function (...number){
//     let sum = 0;
//     for(let i = 0; i < number.length; i++ ) sum+=number[i]
//     console.log(sum);

// }
// add(2,3,5);
// add(12,3,5,8);
// add(2,32,5,3,5);
// const x = [9,10,11];
// add(...x);


// restaurant.orderPizza('mushroom','onion', 'olives', 'spinach' );
// restaurant.orderPizza('mushroom');






// ///////////////////////////////////////////
// The Spread Operator (...)
// const arr = [7,8,9]
// const newbadArray = [1,2,arr[0],arr[1],arr[2]]

// const newArray = [1,2, ...arr];
// console.log(newArray);

// console.log(newArray);
// console.log(...newArray);

// const newMenu = [...restaurant.mainMenu, "Gnocci"];
// console.log(newMenu);

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // Join 2 array

// const menu = [...restaurant.starterMenu,...restaurant.mainMenu]
// console.log(menu)

// // Iterables: array, string, maps, sets. Not object
// const str = 'Jonas';
// const letters = [...str,' ','S.'];
// console.log(letters);
// console.log(...str);

// // Vai Vd thuc
// const ingredients = [
//     // prompt("Let's make pasta! Ingredinets 1 ?"),
//     // prompt("Ingredinets 2 ?"),
//     // prompt("Ingredinets 3 ?")
// ]

// restaurant.orderPasta(...ingredients);

// // Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Huy Nguyen" }
// console.log(newRestaurant);

// const restaurantCopy = {...restaurant}
// restaurantCopy.name = "Cricle K"
// console.log(restaurantCopy.name);
// console.log(restaurant.name);







//  /////////////////////////////////////////////////////////////
// Destructring Objects
// restaurant.orderDelivery({
//     time: '22:30',
//     address: 'HaNoi',
//     mainIndex: 2,
//     starterIndex: 2,
// });


// const { name , openingHours, categories } = restaurant;
// console.log( name, openingHours, categories);

// const {
//     name: restaurantName,
//     openingHours: hours,
//     categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // // Default value
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // // Chuyen doi cac bien
// let a = 111;
// let b = 999;
// const obj = { a:21 , b:7, c:14 };
// ({ a, b} = obj);
// console.log(a, b);

// // // Cách lấy giá trị của mảng lồng nhau
// const {
//     fri: {
//         open: o,
//         close: c,
//     }
// } = openingHours;
// console.log(o , c);





// ///////////////////////////////////////////
// Destructring Array
// const arr = [2,3,4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// // Chuyen doi cac bien
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main,secondary);

// // Cách nhận hai giá trị về một hàm
// const [starter , mainCourse]  = (restaurant.order(2, 0));
// console.log(starter , mainCourse);

// // Cách lấy giá trị của mảng lồng nhau
// const nested = [2,4,[5,6]];
// const [i, ,[j,k]] = nested;
// console.log(i,j,k);   

// // Default value
// const [p = 1, q = 1, r = 1] = [8, 9]
// console.log(p, q, r);


