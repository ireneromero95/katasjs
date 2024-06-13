const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];
function repeatCounter(a, b) {
  suma = 0
  for (const element of a) {
    if (element == b){
      suma = suma + 1
    }
  }
  console.log(suma);
}

repeatCounter(counterWords, 'repeat')
repeatCounter(counterWords, 'code')