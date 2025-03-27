// definisco gli elementi del dom che mi servono
const countdown = document.getElementById('countdown'); // numero--
const numberList = document.getElementById('numbers-list'); // lista numeri da far apparire
const answersForm = document.getElementById('answers-form'); // lista input per risposta
const instructions = document.getElementById('instructions'); // stringa dinamica
const button = document.querySelector('.btn');

const inputValues = document.querySelectorAll('.form-control');

// funzione per generare i numeri random
const randomNumbers = () => Math.floor(Math.random() * 50) + 1;

// funzione per inserire i numeri nella ul
const pickNumbers = (node) => {

    const generatedNumbers = [];
    while (generatedNumbers.length < 5) {
        let randomNumber = randomNumbers();
        if (!generatedNumbers.includes(randomNumber)) {
            generatedNumbers.push(randomNumber);
        }
    }
    generatedNumbers.forEach(number => {
        node.innerHTML += `<li>${number}</li>`
    });
    console.log(generatedNumbers);

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