
const array = [];
  let i = 0;
  let sum = 0;

  
while (sum < 50) {
    numero = parseInt(prompt('Inserisci un numero'));
    array.push(numero);
    console.log(array);
    sum += array[i];
    console.log(sum);
    i++;
}
