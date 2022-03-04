// chiedere all'utente il numero di chilometri che vuole percorrere
const yourKm = parseInt(prompt('quanti km vuoi percorrere?'));

console.log(yourKm);

// chiedere all'utente la sua età
const yourAge = parseInt(prompt('quale è la tua età?'));

console.log(yourAge);

// assicurarsi che i dati siano inseriti correttamente
if (isNaN(yourKm) || isNaN(yourAge)) {
    alert('Hai sbagliato...Inserisci dati numerici!')
}

// calcolo il prezzo del biglietto sapendo che
// è definito in base ai km (0.21 € al km)
const euroPerKm = 0.21

let ticketPrice = euroPerKm * yourKm;

console.log('Il prezzo del tuo biglietto in base ai km è', ticketPrice)