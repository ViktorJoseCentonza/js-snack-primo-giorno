/*
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/

const my_array = [];

for (let i = 0; i < 6; i++) {
    let number = Number(prompt("inserisci un numero, se è dispari verrà aggiunto"))
    if (number % 2 == 1) {
        my_array.unshift(number)
        console.log(`${number} is odd, Added`);
    }
}
console.log(`your final numbers are ${my_array}`);
