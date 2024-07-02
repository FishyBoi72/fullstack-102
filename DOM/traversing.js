// Select the first 'header' element and log it to the console
const head = document.querySelector('header');
console.log(head);

// Select all 'section' elements and log the NodeList to the console
const section = document.querySelectorAll('section');
console.log(section);

// Select the first 'section' element with the class 'current' and log it to the console
const current = document.querySelector('section.current');
console.log(current);

// Select the next sibling element of the 'current' section and log it to the console
const next = current.nextElementSibling;
console.log(next);

// Select the previous sibling element of the 'current' section and log it to the console
const before = current.previousElementSibling;
console.log(before);

// Select the closest ancestor 'div' element of the first 'h2' element with the class 'highlight' and log it to the console
const div = document.querySelector('h2.highlight').closest('div');
console.log(div);

// Select all 'h2' elements, map each 'h2' element to its parent element, and log the array of parent elements to the console
const h2 = Array.from(document.querySelectorAll('h2')).map(function(h2) {
  return h2.parentElement;
});
console.log(h2);