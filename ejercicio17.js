const alien = {
  name: 'Wormuck',
  race: 'Cucusumusu',
  planet: 'Eden',
  weight: '259kg'
}

function alienfumeta(param){
  for (const key in alien) {
    console.log(alien[key]);
  }
}

alienfumeta(alien)
