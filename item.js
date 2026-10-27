// Casos de uso dos itens

// -> CRIAR ITEM COM O SUBTOTAL CERTO
async function createItem(name, price, quantity) {
  return {
    name,
    price,
    quantity,
    subtotal() {
      return this.price * this.quantity;
    },
  };
}

export default createItem;
