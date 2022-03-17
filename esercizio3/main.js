var numero;
var numeri = [];
let i = 0;
while (i < 5) {
    numero = parseInt(prompt('Inserisci un numero'));
    numeri.push(numero);
    i++;
}
console.log(numeri)

let somma = 0;
for (let i = 0; i < numeri.length; i++) {
    somma += numeri[i];
    
}
console.log(somma)

document.getElementById("sommaNumeri").innerHTML += `<div>La somma dei numeri è: ${somma}</div>`;