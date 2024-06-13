const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
  let avenger = " "
  for (i = 0; i <= 5; i++){  
    if (avenger.length < avengers[i].length){
      avenger = avengers[i];
    }
  }
  return avenger;
}
console.log(findLongestWord(avengers));

