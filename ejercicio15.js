const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

function camiseta(a, b) {
  for (const element of a) {
    if (element.includes(b)){
      console.log(element)
    }
  }
}

camiseta(products, 'Camiseta')