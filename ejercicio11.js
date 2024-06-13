const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
  let suma = 0
  for (i = 0; i < mixedElements.length; i++){
    if (Number.isInteger(mixedElements[i])){
      suma = suma + mixedElements[i]
    }
    else {
       suma = suma + mixedElements[i].length;
    }
  }
  console.log(Number(suma));s
}
averageWord(mixedElements);
