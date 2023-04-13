// *****variabili km e età*****

let numeroKm = prompt("Quanti chilometri vuoi percorrere?");
console.log("I chilometri da percorrere sono", numeroKm);
let etaPasseggero = prompt("Quanti anni hai?");
console.log("L'età del passggero è", etaPasseggero);

// ***Dichiaro la variabile prezzoBiglietto e prezzoBilgietto con relativo sconto ***

let prezzoBiglietto = parseInt(numeroKm) * 0.21;
let sconto20percento = prezzoBiglietto - (prezzoBiglietto * 20 / 100);
let sconto40percento = prezzoBiglietto - (prezzoBiglietto * 40 / 100);

// ***Condizione***

if (parseInt(etaPasseggero) < 18) {
    alert("il prezzo del biglietto è di " + sconto20percento);
} else if (parseInt(etaPasseggero) > 65) {
    alert("il prezzo del biglietto è di " + sconto40percento);
} else {
    alert("il prezzo del biglietto è di " + prezzoBiglietto);
}
    


