const goodProducts = [];
const badProducts = [];
const products = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];

for (i = 0; i < products.length; i++){
  if (products[i].sellCount < 20){
    badProducts.push(products[i]);
  }
  else if (products[i].sellCount > 20){
    goodProducts.push(products[i])
  }
}

console.log(badProducts);
console.log(goodProducts);