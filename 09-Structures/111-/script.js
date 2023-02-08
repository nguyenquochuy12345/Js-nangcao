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

    orderPasta(img1, img2, img3) {
        console.log(`Here is your declicious pasta with ${img1}, ${img2} and ${img3} `
        );
    },
    orderPizza(mainIngredinet, ...otherIngredinets) {
        console.log(mainIngredinet);
        console.log(otherIngredinets);
    }

};




















// ---------------------125. String Methods Practice----------------
// const flights = 
// '_Delayed_Departure;fao5646565;txl5465456456;11:25+_Jsjslk;bru56465456;fao4545545;11:45+_Jsjslk;hel56465456;fao4545545;12:05+_Jsjslk;fao56465456;lis4545545;12:30';

// const getCode = str => str.toUpperCase().slice(0,3);

// for(const flight of flights.split('+')){
//     const [type , from , to , time] = flight.split(';');
//     const output = `${type.startsWith('_Delayed') ? '<>' : ''} ${type.replaceAll('_',' ')} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(38);

//     console.log(output);
// }



















// -------------123. Working With Strings - Part 3--------------
// console.log('a+very+nice+string'.split('+'));
// console.log('Jonas Schmedtmann'.split('+'));

// const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

// const newName = ['Mr.',firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const captitalizeName = function(name){
//     const names = name.split(' ');
//     const nameUpper = [];

//     for(const n of names){
//         // nameUpper.push(n[0].toUpperCase() + n.slice(1) );
//         nameUpper.push(n.replace(n[0], n[0].toUpperCase()));
//     }
//     console.log(nameUpper.join(' '));
// };

// captitalizeName('jessica ann smith davis');
// captitalizeName('jonas schmedtmann');

// // Padding 
// const message = 'Go to gate 23!';
// console.log(message.padStart(20, '+').padEnd(30, '+'));
// console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

// const maskCreaditCard = function(number){
//     const str = number + '';
//     const last = str.slice(-4);
//     return console.log(last.padStart(str.length, '+'));

// }
// maskCreaditCard(24578632);
// maskCreaditCard(212312314578632);
// maskCreaditCard('4564865453132345666');``

// // Repeat
// const message2 = 'Bad waether... All Departues Delayed...';
// console.log(message2.repeat(5));

// const planesInLine = function(n) {
//     console.log(`There are ${n} planes in line ${'Fly'.repeat(n)}`);
// }
// planesInLine(5);
// planesInLine(3);
// planesInLine(12);












// -------------122. Working With Strings - Part 2--------------
// const passenger = 'jOnAS';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect = passengerLower[0].toLowerCase() + passengerLower.slice(1);
// console.log(passengerCorrect);
// console.log(passengerCorrect);

// // Comaring emails
// const email = 'hello@jonas.io';
// const loginEmail = ' Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimedEmail = lowerEmail.trim();
// console.log(trimedEmail);

// const normalizaedEmail = loginEmail.toString().trim();
// console.log(normalizaedEmail);
// console.log(email === normalizaedEmail);

// // replaccing
// const priceGB = '288,97$';
// const priceUS = priceGB.replace('$', 'VND').replace(',','.');
// console.log(priceUS);

// const announcement = 'All passengers come to boarding door 23. Boarding door 23!';
// console.log(announcement);
// console.log(announcement.replace(/door/g , 'gate'));

// // Boolaeans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.includes('Airb'));

// if(plane.startsWith('Airbus') && plane.endsWith('neo')){
//     console.log('Part of the New Aribus family');
// }

// // Practice exercise 
// const checkBaggage = function (items){
// const baggage = items.toLowerCase();
//     if(baggage.includes('gun') || baggage.includes('knife')){
//         console.log('You are NOT allowed in board');
//     }else{
//         console.log('Welcome aboard!');
//     }
// };
// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');
















// -------------------121. Working With Strings - Part 1------------------
// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4,7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice( airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMidddleSeat = function(seat){
// // B va E la ghe giua
//     const s = seat.slice(-1);
//     if(s === 'B' || s === 'E' ){
//         console.log('You got the middle seat');
//     }else{
//         console.log('You got lucky');
//     }
// }

// checkMidddleSeat('11B');
// checkMidddleSeat('23C');
// checkMidddleSeat('3E');
















// ----------------------Map----------------------------------
// const question = new Map([
//     ['question', 'What is he best programming language in the wordld'],
//     [1 , 'C'],
//     [2 , 'Java'],
//     [3 , 'Javascrip'],
//     ['correct' , 3],
//     [true , 'Correct '],
//     [false , 'Try again!'],
// ]);
// console.log(question); 

// // Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// // quiz app
// for(const [key, value] of question){
//         if(typeof key === 'number'){
//             console.log(`Answer ${key}: ${value}`);
//         }
// } 
// // const answer = Number(prompt('Your answer :'));
// const answer = 3;
// console.log(answer);

// console.log(question.get(question.get('correct') === answer ));

// console.log([...question]);

// console.log([...question.keys()]);
// console.log([...question.values()]);










// // --------------------------------Maps : Fundamentals-------------------- 

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, ' Lisbon , Portugal'));

// rest
// .set('Banh my', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
// .set('open', 11)
// .set('close', 23)
// .set(true, 'we are open : D')
// .set(false, 'we are closed : (');

// console.log(rest.get('name'));
// console.log(rest.get(true));

// const time = 8;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close') ));

// console.log(rest.has(rest.has('categories')));
// rest.delete(1);

// const arr = [1,2];
// rest.set(arr, 'Test')
// rest.set(document.querySelector('h1'),'heading')
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));











// // --------------------------Set-------------------------
// const ordersSet = new Set([
//     'Pasta',
//     'Pizza',
//     'Pizza',
//     'Risotto',
//     'Pasta',
//     'Pizza',
// ]);

// console.log(ordersSet);
// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));
// ordersSet.add('Pho');
// ordersSet.add('Bread');
// ordersSet.delete('Bread');
// console.log(ordersSet);

// for(const order of ordersSet){console.log(order)}

// const staff = ['Waiter','Chef','Waiter','Manager','Chef','Waiter'];
// const staffUnique = [...new Set(staff)];

// console.log(staffUnique);











// --------------------// Property NAMES-----------------------

// const property = Object.keys(openingHours);
// console.log(property);

// let openStr = `We are open on ${property.length} days : `;

// for(const day of property){
//     openStr += `${day}, `;
// }
// console.log(openStr);

// // Property VALUES
// const values = Object.values(openingHours);
// console.log(values);

// // Entire object
// const entries = Object.entries(openingHours); 
// // console.log(entries);

// // [key, value]
// for(const [key , {open , close }] of entries){
//     console.log(`On ${key} we open at ${open} and close at ${close}`);
// }





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


