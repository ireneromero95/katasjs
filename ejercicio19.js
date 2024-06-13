const toys = [
  {id: 5, name: 'Buzz MyYear'}, 
  {id: 11, name: 'Action Woman'}, 
  {id: 23, name: 'Barbie Man'}, 
  {id: 40, name: 'El gato con Guantes'},
  {id: 40, name: 'El gato felix'}
  ]

for (key in toys) {
  toy = toys[key];
  if (toy.name.includes('gato')){
    delete toys[key]; //Hay que borrar la cosa entera porque al borrar solo toy se borra la unificacion no el dato en sí
  }
}

console.log(toys)