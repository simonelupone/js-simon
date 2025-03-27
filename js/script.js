// definisco gli elementi del dom che mi servono
const countdown = document.getElementById('countdown'); // numero--
const numberList = document.getElementById('numbers-list'); // lista numeri da far apparire
const answersForm = document.getElementById('answers-form'); // lista input per risposta
const instructions = document.getElementById('instructions'); // stringa dinamica
const button = document.querySelector('.btn');
const message = document.getElementById('message');

const inputValues = document.querySelectorAll('.form-control');

const generatedNumbers = [];

// funzione per generare i numeri random
const randomNumbers = () => Math.floor(Math.random() * 50) + 1;

// funzione per inserire i numeri nella ul
const pickNumbers = (node) => {
    while (generatedNumbers.length < 5) {
        let randomNumber = randomNumbers();
        if (!generatedNumbers.includes(randomNumber)) {
            generatedNumbers.push(randomNumber);
        }
    }
    generatedNumbers.forEach(number => {
        node.innerHTML += `<li>${number}</li>`
    });
    console.log(`I numeri generati sono ${generatedNumbers}`);

}
pickNumbers(numberList);

// funzione per effettuare un countdown da 30 secondi
let count = 30;
countdown.innerHTML = count--;
const startGame = setInterval(() => {
    if (count >= 0) {
        countdown.innerHTML = count;
    } else {
        clearInterval(startGame);
        numberList.innerHTML = '';
        answersForm.classList.remove('d-none');
        instructions.innerHTML = 'Inserisci tutti i numeri che ricordi, (l\'ordine non è importante)';
    }
    count--;
}, 1000);

startGame;

let numCounter = 0;
const result = (a, b) => {
    for (i = 0; i < a.length; i++) {
        if (b.includes(a[i])) {
            // console.log(a[i]);
            numCounter++;
        }
    }
    console.log(`Hai indovinato ${numCounter} numeri!`);
}

// metto in ascolto il bottone per controllare se i numeri inseriti sono uguali a quelli generati
button.addEventListener('click', (event) => {
    event.preventDefault();

    // salvo i valori degli input in un array
    const userNumbers = [];
    for (const value of inputValues.values()) {
        userNumbers.push(parseInt(value.value));
    }
    result(generatedNumbers, userNumbers);
    console.log(`I numeri dell'utente sono: ${userNumbers}`);

    // stampo in pagina l'esito
    if (numCounter === 0) {
        message.innerHTML = 'Non hai indovinato nessun numero.'
    } else {
        message.innerHTML = `Hai indovinato ${numCounter} numeri!`
        message.classList.remove('text-danger');
        message.classList.add('text-success', 'fs-3');
    }
});