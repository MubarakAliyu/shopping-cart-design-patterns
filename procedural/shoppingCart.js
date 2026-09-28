// ============================================
// PROCEDURAL SHOPPING CART
// ============================================

// Global variable storing all cart items.
// This is intentionally global because the checkpoint
// asks us to demonstrate procedural programming.
let cart = [];

// --------------------------------------------
// Add an item to the cart
// --------------------------------------------

function addItem(name, quantity, price) {
  // Check whether the item already exists in the cart.
  const existingItem = cart.find((item) => item.name === name);

  if (existingItem) {
    // If the item already exists, increase its quantity.
    existingItem.quantity += quantity;
  } else {
    // Otherwise, add a new item.
    cart.push({
      name,
      quantity,
      price,
    });
  }
}

// --------------------------------------------
// View all items and total price
// --------------------------------------------

function viewCart() {
  let total = 0;

  console.log("\nShopping Cart:");

  if (cart.length === 0) {
    console.log("Cart is empty.");
    return;
  }

  cart.forEach((item) => {
    const itemTotal = item.quantity * item.price;

    total += itemTotal;

    console.log(
      `${item.name} (x${item.quantity}) - ${itemTotal.toFixed(2)} TND`
    );
  });

  console.log(`Total: ${total.toFixed(2)} TND`);
}

// --------------------------------------------
// Remove an item by name
// --------------------------------------------

function removeItem(name) {
  cart = cart.filter((item) => item.name !== name);
}

// --------------------------------------------
// Clear the entire cart
// --------------------------------------------

function clearCart() {
  cart = [];
}

// ============================================
// TEST THE SHOPPING CART
// ============================================

addItem("Apple", 2, 1.5);
addItem("Orange", 3, 2.0);

viewCart();

removeItem("Apple");

viewCart();

clearCart();

viewCart();