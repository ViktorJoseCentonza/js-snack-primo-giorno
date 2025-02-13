/*
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/

const my_array = [];

for (let i = 0; i < 6; i++) {
    let number = Number(prompt(`inserisci il ${i + 1}* numero su 6, se è dispari verrà aggiunto`))

    if (isNaN(number) || number == null) {
        alert("Invalid input! try again");
        i--;
    } else if (number % 2 == 1) {
        my_array.push(number)
        console.log(`${number} is odd, Added`);
    }
}
console.log(`your final numbers are ${my_array}`);
