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

// variabile di conto
let minWeight = Infinity;
let lightestBike;

for (i = 0; i < raceBikes.length; i++) {
    const bike = raceBikes[i];
    let weight = bike.weight;

    // comparazione peso bici
    if (weight < minWeight) {
        minWeight = weight;
        lightestBike = bike;
    }
}

console.log(lightestBike);