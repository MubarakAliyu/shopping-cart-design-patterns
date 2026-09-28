// ============================================
// MODULE PATTERN SHOPPING CART
// ============================================

// The IIFE creates a private scope for the cart data.
// The cart itself cannot be accessed directly from outside
// the module.

const shoppingCart = (() => {
  // Private cart data.
  let cart = [];

  // Add an item to the cart.
  function addItem(name, quantity, price) {
    const existingItem = cart.find(
      (item) => item.name === name
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({
        name,
        quantity,
        price,
      });
    }
  }

  // View all items and calculate the total.
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

  // Remove an item by name.
  function removeItem(name) {
    cart = cart.filter(
      (item) => item.name !== name
    );
  }

  // Clear the entire cart.
  function clearCart() {
    cart = [];
  }

  // Only expose the operations that should be public.
  return {
    addItem,
    viewCart,
    removeItem,
    clearCart,
  };
})();

// Export the public shopping cart interface.
export default shoppingCart;

// ============================================
// TEST THE MODULE
// ============================================

shoppingCart.addItem("Apple", 2, 1.5);
shoppingCart.addItem("Orange", 3, 2.0);

shoppingCart.viewCart();

shoppingCart.removeItem("Apple");

shoppingCart.viewCart();

shoppingCart.clearCart();

shoppingCart.viewCart();