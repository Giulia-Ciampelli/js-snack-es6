console.log('im alive');

// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

// variabili
let minWeight = Infinity;
let lightestBike;
const outputElement = document.getElementById('output');

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

// ciclo for per cercare in tutto l'array
for (i = 0; i < raceBikes.length; i++) {
    const bike = raceBikes[i];
    let weight = bike.weight;

    // comparazione peso bici
    if (weight < minWeight) {
        minWeight = weight;
        lightestBike = bike;
    }
}

// stampa in schermo
outputElement.innerHTML = `Bici più leggera: ${lightestBike.name}, ${lightestBike.weight}kg`;