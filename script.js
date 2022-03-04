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

// calcolare il prezzo del biglietto sapendo che
// è definito in base ai km (0.21 € al km)
const euroPerKm = 0.21;

let ticketPrice = euroPerKm * yourKm;

console.log('Il prezzo del tuo biglietto in base ai km è', ticketPrice + '€');

///////// applicare uno sconto del 20% per i minorenni
///////// applicare uno sconto del 40% per gli over 65
if (yourAge < 18) {
    ticketPrice = ticketPrice - (ticketPrice / 100 * 20);
    console.log('Il prezzo del tu biglietto da minorenne è di', ticketPrice + '€')
} else if (yourAge > 65) {
    ticketPrice = ticketPrice - (ticketPrice / 100 * 65);
    console.log('Il prezzo del tu biglietto da over 65 è di', ticketPrice + '€')
} else {
    console.log('Il prezzo del tuo biglietto non potendo usufruire degli sconti è di', ticketPrice + '€')
}

// arrotondo il prezzo finale a due cifre decimali
ticketPrice = ticketPrice.toFixed(2);

// aggiungo in document nel tag h1 il prezzo finale
document.getElementById('final-price').innerText = 'Il prezzo del tuo biglietto è di ' + ticketPrice + '€'