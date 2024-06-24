const cart = document.querySelector('ul')

cart.children[1].innerHTML = "Granny Smith Apples"

cart.children[3].remove()

const item = document.createElement("li")
item.innerHTML = "Kombucha"
cart.appendChild(item)

while (cart.children.length > 0){
    cart.children[0].remove()
}

function fill(){
    let items = ['protein bars', 'almonds', 'peanut butter'];
    items.forEach(function(x){
        cart.appendChild(document.createElement('li'));
        cart.children[items.indexOf(x)].innerHTML = x
    })
}
fill()
cart.children[1].setAttribute('class', 'important')

console.log(cart)