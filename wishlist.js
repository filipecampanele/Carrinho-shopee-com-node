// Casos de uso da lista de desejos

async function addToWishlist(wishList, item) {
  wishList.push(item);
}

async function displayWishlist(wishList) {
  console.log("\nShopee Wishlist:");
  wishList.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name} - R$ ${item.price.toFixed(2)}`);
  });
}

export { addToWishlist, displayWishlist };
