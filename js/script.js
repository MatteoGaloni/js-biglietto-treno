// *****variabili km e età*****

let numeroKm = prompt("Quanti chilometri vuoi percorrere?");
console.log("I chilometri da percorrere sono", numeroKm);
let etaPasseggero = prompt("Quanti anni hai?");
console.log("L'età del passggero è", etaPasseggero);

// ***Dichiaro la variabile prezzoBiglietto ***

let prezzoBiglietto = parseInt(numeroKm) * 0.21;

if (parseInt(etaPasseggero) < 18) {
    alert("il prezzo del biglietto è di", prezzoBiglietto);

// if else (parseInt(etaPasseggero) > 65)

