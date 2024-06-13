// Dado el siguiente objeto, cambia el valor de la propiedad age a 25
const character = {name:'Jack Sparrow', age: 10};

character.age = 25
console.log("Aquí empieza el 1.2:")

//1.2

firstName = 'Jon'; 
lastName = 'Snow'; 
age = 24; 

console.log(`Soy ${firstName} ${lastName} tengo ${age} y me gustan los lobos`)
console.log("Aquí empieza el 1.3:")
//1.3
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};

console.log(toy1.price + toy2.price)
console.log("Aquí empieza el 1.4:")

//1.4

let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

globalBasePrice = 25000

function precio(a){
  a.finalPrice = globalBasePrice + a.basePrice;
  console.log(a);
}
precio(car1);
precio(car2);
