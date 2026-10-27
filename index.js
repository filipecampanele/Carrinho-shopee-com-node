import * as cartService from "./services/cart.js";
import * as wishlistService from "./services/wishlist.js";
import createItem from "./services/item.js";

const myCart = [];
const myWishList = [];

console.log("Welcome to the your Shopee Cart!");

// criando dois itens
const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item2 = await createItem("hotwheels lamborghini", 39.99, 3);

// adicionando à lista de desejos
await wishlistService.addToWishlist(myWishList, item1);
await wishlistService.displayWishlist(myWishList);

// adicionando itens ao carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

// exibindo e calculando
await cartService.displayCart(myCart);

// removendo uma unidade do item2 (3 -> 2)
await cartService.removeItem(myCart, item2);
await cartService.displayCart(myCart);

// deletando o item1 por completo
await cartService.deleteItem(myCart, item1.name);
await cartService.displayCart(myCart);

await cartService.calculateTotal(myCart);
