const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]

const reallyplacesToTravel = []

for (const key in placesToTravel) {
  place = placesToTravel[key]
  for (const llave in place){
    if ((place[llave] !== 11) && (place[llave] !== 'Venecia') && (place[llave] !== 'Filipinas') && (place[llave] !== 44)){
      reallyplacesToTravel.push(place);
    }
  }
}

console.log(reallyplacesToTravel)

