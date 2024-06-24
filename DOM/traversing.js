const head = document.querySelector('header')
console.log(head)

const section = document.querySelectorAll('section')
console.log(section)

const current = document.querySelector('section.current')
console.log(current)

const next = current.nextElementSibling
console.log(next)

const before = current.previousElementSibling
console.log(before)

const div = document.querySelector('h2.highlight').closest('div')
console.log(div)

const h2 = Array.from(document.querySelectorAll('h2')).map(function(h2){return h2.parentElement})
console.log(h2)