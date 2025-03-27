// definisco gli elementi del dom che mi servono
const countdown = document.getElementById('countdown'); // numero--
const numberList = document.getElementById('numbers-list'); // lista numeri da far apparire

// funzione per generare i numeri random
const randomNumbers = () => Math.floor(Math.random() * 100) + 1;

// funzione per inserire i numeri nella ul
const pickNumbers = (node) => {
    for (i = 1; i <= 5; i++) {
        node.innerHTML += `<li>${randomNumbers()}</li>`
    }
}
pickNumbers(numberList);