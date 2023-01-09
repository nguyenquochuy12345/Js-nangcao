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
    scored: ['Lewandowski','Gnarby','Lewandowski','Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
}
// 1
const [players1,players2] = game.players
console.log(players1,players2);
// 2
const [gk1, ...fieldPlayers1] = players1;
const [gk2, ...fieldPlayers2] = players2;
console.log(gk1,fieldPlayers1);

// 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);


// 4
const players1Final = [...players1,'Thiago', 'Coutinho','Perisic']
console.log(players1Final);
// 5
const {odds: {team1, x:draw , team2 }} = game;
console.log(team1,draw,team2);
// 6
const printGoals = function(...player){
    console.log(` ${player.length} goals were score !`)
}
printGoals('Lewandowski','Gnarby','Lewandowski','Hummels')
printGoals('Lewandowski','Hummels')
printGoals(...game.scored)
// 7
// console.log(team1<team2);
team1 < team2 && console.log('Team1 have lost winner');
team1 > team2 && console.log('Team2 have lost winner');