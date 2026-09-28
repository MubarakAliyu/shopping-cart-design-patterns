# Shopping Cart Design Patterns

## Overview

This project demonstrates the difference between procedural programming and design-pattern-based programming in JavaScript.

The same shopping cart functionality is implemented in two ways:

1. Procedural Programming
2. Module Pattern

The goal is to compare the organization and maintainability of both approaches.

## Features

The shopping cart supports:

- Adding items with name, quantity, and price
- Viewing all cart items
- Calculating the total price
- Removing an item by name
- Clearing the entire cart

## Project Structure

```text
shopping-cart-design-patterns/
├── procedural/
│   └── shoppingCart.js
├── module/
│   └── shoppingCart.js
├── reflection.md
├── README.md
└── package.json

Part 1: Procedural Programming

The procedural implementation uses:

A global variable to store cart data
Standalone functions to manage the cart

The main functions are:

addItem()
viewCart()
removeItem()
clearCart()

Run it with:

node procedural/shoppingCart.js
Part 2: Module Pattern

The refactored version uses the Module Pattern.

The cart data is kept private inside the module, while the cart operations are exposed through the module's public interface.

The public operations are:

addItem()
viewCart()
removeItem()
clearCart()

Run it with:

node module/shoppingCart.js
Example
Shopping Cart:
Apple (x2) - 3.00 TND
Orange (x3) - 6.00 TND
Total: 9.00 TND

Shopping Cart:
Orange (x3) - 6.00 TND
Total: 6.00 TND
Design Pattern Used
Module Pattern

The Module Pattern was selected because it allows related cart functionality to be organized together while keeping the cart data private.

This reduces global scope pollution and improves encapsulation and maintainability.

Reflection

See reflection.md for the short reflection report.

Author

Aliyu Mubarak