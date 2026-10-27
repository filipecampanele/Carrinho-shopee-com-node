// Casos de uso do carrinho

// -> ADICIONAR ITEM AO CARRINHO
async function addItem(userCart, item) {
  userCart.push(item);
}

// -> CALCULAR O TOTAL DO CARRINHO
async function calculateTotal(userCart) {
  console.log("\nShopee Cart TOTAL IS:");
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(`🎁Total: R$ ${result.toFixed(2)}`);
}

// -> DELETAR ITEM DO CARRINHO (remove o item inteiro pelo nome)
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

// -> REMOVER ITEM (diminui a quantidade em 1; se chegar a 0, tira do carrinho)
async function removeItem(userCart, item) {
  // 1. encontrar o índice do item
  const indexFound = userCart.findIndex((p) => p.name === item.name);

  // 2. caso não encontre o item
  if (indexFound === -1) {
    console.log("Item não encontrado");
    return;
  }

  // 3. item > 1 subtrai um item
  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
    return;
  }

  // 4. caso item = 1 deletar o item
  if (userCart[indexFound].quantity === 1) {
    userCart.splice(indexFound, 1);
  }
}

// -> MOSTRAR TODOS OS ITENS DO CARRINHO
async function displayCart(userCart) {
  console.log("\nShopee cart list:");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$ ${item.price.toFixed(2)} | ${item.quantity}x | Subtotal = R$ ${item.subtotal().toFixed(2)}`
    );
  });
}

export { addItem, calculateTotal, deleteItem, removeItem, displayCart };
