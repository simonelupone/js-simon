// definisco gli elementi del dom che mi servono
const countdown = document.getElementById('countdown'); // numero--
const numberList = document.getElementById('numbers-list'); // lista numeri da far apparire
const answersForm = document.getElementById('answers-form'); // lista input per risposta
const instructions = document.getElementById('instructions'); // stringa dinamica

// funzione per generare i numeri random
const randomNumbers = () => Math.floor(Math.random() * 100) + 1;

// funzione per inserire i numeri nella ul
const pickNumbers = (node) => {
    for (i = 1; i <= 5; i++) {
        node.innerHTML += `<li>${randomNumbers()}</li>`
    }
}
pickNumbers(numberList);

// funzione per effettuare un countdown da 30 secondi
let count = 3;
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