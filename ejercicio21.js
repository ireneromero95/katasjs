const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];
const mayores = [];
const menores = [];

for (const element of users){
  if (element.years >= 18){
    mayores.push(element)
  }
  if(element.years < 18){
    menores.push(element);
  }
}

console.log(`Usuarios mayores de edad`, mayores);
console.log(`Usuarios menores de edad`, menores)