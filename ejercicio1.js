/*El terreno rectangular
Un agricultor tiene un terreno rectangular y conoce su base y su altura en metros.
Quiere calcular tanto el área como el perímetro del terreno para cercarlo y sembrar.
Diseña un programa en el que él pueda obtener ambos valores.
*/

let base = 20
let altura = 30

const area = base * altura;
const perimetro = (base + altura ) * 2;

console.log("el area del terreno rectangular es de :" + area + "m²");
console.log("el perimetro del terreno rectangular es de :" + perimetro + "m");