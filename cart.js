// cart.js

// Initialize cart data as an empty array
let cartItems = [];

// Function to add item to cart
function addToCart(name, price) {
  // Check if the item is already in the cart
  const existingItem = cartItems.find((item) => item.name === name);

  if (existingItem) {
    // If the item is already in the cart, increase the quantity
    existingItem.quantity += 1;
  } else {
    // If the item is not in the cart, add it with a quantity of 1
    cartItems.push({ name, price, quantity: 1 });
  }

  // Update the cart total price
  updateCartTotal();

  // Save the cart data to local storage
  saveCartToLocalStorage();
}

// Function to update the cart total price
function updateCartTotal() {
  const totalPriceElement = document.getElementById("totalPrice");
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  totalPriceElement.textContent = totalPrice.toFixed(2);
}

// Function to clear the cart
function clearCart() {
  cartItems = [];
  updateCartTotal();
  saveCartToLocalStorage();
  updateCartDisplay();
}

// Function to save the cart data to local storage
function saveCartToLocalStorage() {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

// Function to load the cart data from local storage
function loadCartFromLocalStorage() {
  const cartData = localStorage.getItem("cartItems");
  if (cartData) {
    cartItems = JSON.parse(cartData);
    updateCartTotal();
    updateCartDisplay();
  }
}

// Function to update the cart display on the cart page
function updateCartDisplay() {
  const cartList = document.getElementById("cartList");
  cartList.innerHTML = "";

  cartItems.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
    cartList.appendChild(listItem);
  });
}

// Load cart data from local storage on page load
document.addEventListener("DOMContentLoaded", () => {
  loadCartFromLocalStorage();
});
