/*
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/

const first_number = parseInt(prompt("Scrivi il primo numero"))
const second_number = parseInt(prompt("Scrivi il secondo numero"))
parseInt()
console.log(first_number);
console.log(second_number);

if (first_number > second_number) {
    console.log(`il maggiore è ${first_number}`);
} else if (second_number > first_number) {
    console.log(`il maggiore è ${second_number}`);
} else {
    console.log(`il maggiore è nessuno, sono uguali! primo:${first_number}, secondo:${second_number}`);
}  