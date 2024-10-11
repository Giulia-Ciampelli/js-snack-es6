console.log('im alive three');

// Snack 3 (Bonus)
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

let classes = [
    {
        name: 'Class 1',
        grade: 2
    },
    {
        name: 'Class 2',
        grade: 5
    },
    {
        name: 'Class 3',
        grade: 1
    },
    {
        name: 'Class 4',
        grade: 6
    },
    {
        name: 'Class 5',
        grade: 3
    }
];

function indexBetween(arr, a, b) {
    
    // variabili
    let result = [];
    
    // accesso agli indici
    arr[a];
    
    // condizionale per tenere a minore di b
    if (a >= b) {
        alert('Errore: "a" devessere minore di "b"');
        return;
    }

    // ciclo for che parte da a e finisce con b
    for (let i = a; i < b; i++) {
        result.push(arr[i]);
    }
    return result;
}

console.log(indexBetween(classes, 1, 4));