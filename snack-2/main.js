/*
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/

const first_word = prompt("Inserisci la prima parola")
const second_word = prompt("Inserisci la seconda parola")

if (first_word == null || second_word == null) {
    console.log("you left a word empty! be sure to press OK!");

} else if (first_word.length < second_word.length) {
    alert(`${first_word} is shorter than ${second_word}`);

} else if (first_word.length > second_word.length) {
    alert(`${second_word} is shorter than ${first_word}`);
} else {
    alert(`${first_word} is as long as ${second_word}`)

}

