// Select the first 'ul' element in the document and assign it to the variable 'cart'
const cart = document.querySelector('ul');

// Change the inner HTML of the second child of 'cart' to "Granny Smith Apples"
cart.children[1].innerHTML = "Granny Smith Apples";

// Remove the fourth child of 'cart'
cart.children[3].remove();

// Create a new 'li' element, set its inner HTML to "Kombucha", and append it to 'cart'
const item = document.createElement("li");
item.innerHTML = "Kombucha";
cart.appendChild(item);

// Remove all children of 'cart'
while (cart.children.length > 0) {
    cart.children[0].remove();
}

// Define a function called 'fill' that adds several items to 'cart'
function fill() {
    // Create an array of items to add to the cart
    let items = ['protein bars', 'almonds', 'peanut butter'];
    // For each item in the array, create a new 'li' element and set its inner HTML to the item
    items.forEach(function(x) {
        cart.appendChild(document.createElement('li')); // Append a new 'li' element to 'cart'
        cart.children[items.indexOf(x)].innerHTML = x; // Set the inner HTML of the newly added 'li' element
    });
}

// Call the 'fill' function to populate the cart with items
fill();

// Set the class attribute of the second child of 'cart' to 'important'
cart.children[1].setAttribute('class', 'important');

// Log the 'cart' element and its contents to the console
console.log(cart);