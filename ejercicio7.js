function sum(numberOne , numberTwo) {
  if (numberOne > numberTwo){
    console.log(numberOne);
  }
  else if(numberTwo > numberOne){
    console.log(numberTwo);
  }
  else{
    console.log("Son iguales")
  }
}

sum(1, 2);
sum(2, 1);
sum(1,1);