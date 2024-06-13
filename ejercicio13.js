const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function finderName(a, b) {
  for (const element of a) {
    if (a.includes(b)){
      console.log(b)
      break;
    }
    else{
      console.log(`No está ${b}`)
      break;
    }
}
}

finderName(nameFinder, 'Bruce');
finderName(nameFinder, 'Paula');