console.log('im alive too');

// Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// variabili
let result = [];

const teams = [
    {
        name: 'Barcelona',
        fouls: 0,
        goals: 0
    },
    {
        name: 'PSG',
        fouls: 0,
        goals: 0
    },
    {
        name: 'Juventus',
        fouls: 0,
        goals: 0
    },
    {
        name: 'Bayern',
        fouls: 0,
        goals: 0
    },
    {
        name: 'Manchester',
        fouls: 0,
        goals: 0
    }
];

// funzione random da richiamare nel loop
function randomNum() {
    return Math.floor(Math.random() * 100) + 1;
}

// ciclo for per passare la funzione random sulle proprietà fouls e goals
for (i = 0; i < teams.length; i++) {
    const team = teams[i];
    team.fouls = randomNum();
    team.goals = randomNum();
    result.push ({
        name: team.name,
        fouls: team.fouls
    })
}

// output
console.log(result);

// altra opzione: Math.ceil(Math.random())