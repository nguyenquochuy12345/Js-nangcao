const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ]
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
}

const gameEvents = new Map([
    [17, 'GOAL'],
    [36, 'Substitution'],
    [47, 'GOAL'],
    [61, 'SubstitutionAL'],
    [64, 'Yellow card'],
    [69, 'Red card'],
    [70, 'Substitution'],
    [72, 'Substitution'],
    [76, 'GOAL'],
    [80, 'GOAL'],
    [92, 'Yellow card'],
]);


// ---------------------------LAB2.2-------------------------
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
    const text = document.querySelector('textarea').value;
    const rows = text.split('\n');

    console.log(rows);
    
    for (const [i , row ] of rows.entries()) {

        const [frist, second] = row.toLowerCase().trim().split('_');


        const output = `${frist}${second.replace(
            second[0],
            second[0].toUpperCase()
        )}`
        console.log(`${output.padEnd(20)}${'^'.repeat(i + 1)}`);
    }
})







// ---------------------------LAB2.1-------------------------
// // 1
// const events = [...new Set(gameEvents.values())];
// console.log(events);
// // 2
// gameEvents.delete(64);
// console.log(gameEvents);
// // 3
// const lastTime = [...gameEvents.keys()].pop();
// console.log(`1 sự kiện xảy ra, trung bình mỗi ${lastTime / gameEvents.size}  phút`);
// // 4
// for(const [min,events] of gameEvents){
//     const half = min <= 45 ? 'FIRST' : 'LAST'
//     console.log(`[${half} HALF] ${min}: ${events}`);
// }

















// // --------------------LAB 1.2-----------------------
// console.log('-----------LAB 1.2-----------');
// // 1
// for (const [id, name] of game.scored.entries()){
//     console.log(`Goal ${(id +1)}: ${name} `)
// }
// // 2
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds){
//     average += odd;
// }
// average /= odds.length;
// console.log(average);

// // 3
// for(const [team, odd] of Object.entries(game.odds)){
//     const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//     console.log(`Odd of ${teamStr} : ${odd} `);
// }







// // ---------------------LAB 1.1------------------------
// console.log('-----------LAB 1.1-----------');
// // 1
// const [players1,players2] = game.players
// console.log(players1,players2);
// // 2
// const [gk1, ...fieldPlayers1] = players1;
// const [gk2, ...fieldPlayers2] = players2;
// console.log(gk1,fieldPlayers1);

// // 3
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4
// const players1Final = [...players1,'Thiago', 'Coutinho','Perisic']
// console.log(players1Final);
// // 5
// const {odds: {team1, x:draw , team2 }} = game;
// console.log(team1,draw,team2);
// // 6
// const printGoals = function(...player){
//     console.log(` ${player.length} goals were score !`)
// }
// printGoals('Lewandowski','Gnarby','Lewandowski','Hummels')
// printGoals('Lewandowski','Hummels')
// printGoals(...game.scored)
// // 7
// // console.log(team1<team2);
// team1 < team2 && console.log('Team1 have lost winner');
// team1 > team2 && console.log('Team2 have lost winner');
