console.log('im alive');

// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

const raceBikes = [
    {
        name: 'Kabon',
        weight: 8.3
    },
    {
        name: 'Savadeck',
        weight: 8.4
    },
    {
        name: 'Hiland',
        weight: 13.8
    },
    {
        name: 'Kootu',
        weight: 9.4
    },
];

for (i = 0; i < raceBikes.length; i++) {
    const bike = raceBikes[i];
    const weight = bike.weight;
    console.log(weight);

    // come isolare il valore più basso?
}

// metodi da usare: .sort(), toSorted()