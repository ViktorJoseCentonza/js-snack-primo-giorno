/*
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/

const first_number = Number(prompt("Scrivi il primo numero"))
const second_number = Number(prompt("Scrivi il secondo numero"))

if (first_number > second_number) {
    console.log(`${first_number} è maggiore di ${second_number}`);
} else if (second_number > first_number) {
    console.log(`${second_number} è maggiore di ${first_number}`);
} else {
    console.log(`il maggiore è nessuno, sono uguali! primo:${first_number}, secondo:${second_number}.`);
}  