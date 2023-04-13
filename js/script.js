// *****variabili km e età*****

let numeroKm = prompt("Quanti chilometri vuoi percorrere?");
console.log("I chilometri da percorrere sono", numeroKm);
let etaPasseggero = prompt("Quanti anni hai?");
console.log("L'età del passggero è", etaPasseggero);

// ***Dichiaro la variabile prezzoBiglietto ***

let prezzoBiglietto = console.log(parseInt(numeroKm) * 0.21);

if (parseInt(etaPasseggero) < 18) {
    console.log("il prezzo del biglietto è di", prezzoBiglietto);
}
