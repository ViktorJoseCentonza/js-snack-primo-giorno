/*
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/
let sum_number = 0;

for (let i = 0; i < 10; i++) {
    const number = Number(prompt(`inserisci il ${i + 1}* numero`))
    if (isNaN(number)) {
        alert("Hai inserito un valore invalido!")
        i--;
    } else {
        sum_number = sum_number + number;
    }

}

alert(`La somma finale è ${sum_number}`)
