// Event listener that triggers when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize the cart when the page is loaded
  initializeCart();

  // Add event listener for the form submission
  document.getElementById('addItemForm').addEventListener('submit', (event) => {
    // Prevent the form from submitting in the traditional way
    event.preventDefault();
    
    // Get the item name and price from the form inputs
    const itemName = document.getElementById('itemName').value;
    const itemPrice = parseFloat(document.getElementById('itemPrice').value);
    
    // Create an item object with a unique id, name, and price
    const item = {
      id: Date.now(),
      name: itemName,
      price: itemPrice
    };
    
    // Add the item to the cart
    addItem(item);
    
    // Reset the form inputs
    document.getElementById('addItemForm').reset();
  });

  // Add event listener for the display cart button
  document.getElementById('displayCartButton').addEventListener('click', () => {
    // Display the contents of the cart in the console
    displayCart();
  });
});

// Function to initialize the cart in localStorage if it doesn't already exist
function initializeCart() {
  // Check if 'cart' exists in localStorage
  if (!localStorage.getItem('cart')) {
    // If not, initialize an empty cart and store it in localStorage
    localStorage.setItem('cart', JSON.stringify([]));
  }
}

// Function to add an item to the cart
function addItem(item) {
  // Retrieve the cart from localStorage and parse it to a JavaScript object
  const cart = JSON.parse(localStorage.getItem('cart'));
  
  // Add the new item to the cart
  cart.push(item);
  
  // Store the updated cart back in localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to remove an item from the cart by its ID
function removeItem(itemId) {
  // Retrieve the cart from localStorage and parse it to a JavaScript object
  const cart = JSON.parse(localStorage.getItem('cart'));
  
  // Filter out the item with the given ID
  const updatedCart = cart.filter(item => item.id !== itemId);
  
  // Store the updated cart back in localStorage
  localStorage.setItem('cart', JSON.stringify(updatedCart));
}

// Function to display the cart contents
function displayCart() {
  // Retrieve the cart from localStorage and parse it to a JavaScript object
  const cart = JSON.parse(localStorage.getItem('cart'));
  
  // Log the cart contents to the console
  console.log(cart);
}