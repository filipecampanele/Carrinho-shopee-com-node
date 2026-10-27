# 🛒 Carrinho de Compras da Shopee com Node.js

## Setup
```bash
npm start
```
Requer Node.js 18+ (usa ES Modules e top-level await).

## Arquitetura
```
src/
├── index.js            # fluxo principal / testes manuais
└── services/
    ├── item.js         # createItem (com subtotal)
    ├── cart.js         # addItem, deleteItem, removeItem, calculateTotal, displayCart
    └── wishlist.js     # addToWishlist, displayWishlist
```
