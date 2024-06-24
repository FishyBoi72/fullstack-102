document.addEventListener('DOMContentLoaded', () => {
    initializeCart();
  
    document.getElementById('addItemForm').addEventListener('submit', (event) => {
      event.preventDefault();
      const itemName = document.getElementById('itemName').value;
      const itemPrice = parseFloat(document.getElementById('itemPrice').value);
      const item = {
        id: Date.now(),
        name: itemName,
        price: itemPrice
      };
      addItem(item);
      document.getElementById('addItemForm').reset();
    });
  
    document.getElementById('displayCartButton').addEventListener('click', () => {
      displayCart();
    });
  });
  
  function initializeCart() {
    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify([]));
    }
  }
  
  function addItem(item) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  function removeItem(itemId) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const updatedCart = cart.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  }
  
  function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    console.log(cart);
  }
  