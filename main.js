/*
De un arreglo dado, recorrer numero por numero y decir si es numero primo o no.
*/

var listOfNumbers = [163, 181, 721, 7, 123, 45, 65, 77, 72, 456, 893];
var isPrime = "Numero primo: ";
var isWhole = "Numero entero: ";

for (let index = 0; index < listOfNumbers.length; index++) {
  const element = listOfNumbers[index];
  var divBy2 = listOfNumbers[index] % 2;
  var divBy3 = listOfNumbers[index] % 3;
  var divBy5 = listOfNumbers[index] % 5;
  var divBy7 = listOfNumbers[index] % 7;
  var divBy11 = listOfNumbers[index] % 11;
  var divBy13 = listOfNumbers[index] % 13;
  if (divBy2 === 0 && element != 2) {
    console.log(isWhole + element);
  } else if (divBy3 === 0 && element != 3) {
    console.log(isWhole + element);
  } else if (divBy5 === 0 && element != 5) {
    console.log(isWhole + element);
  } else if (divBy7 === 0 && element != 7) {
    console.log(isWhole + element);
  } else if (divBy11 === 0 && element != 11) {
    console.log(isWhole + element);
  } else if (divBy13 === 0 && element != 13) {
    console.log(isWhole + element);
  } else {
    console.log(isPrime + element);
  }
}
