let navber = document.getElementsByClassName('navbar')
let ul = document.getElementById('links')
let menu = document.getElementById('open-menu')
let arrow = document.getElementById('cut-menu')
let btn = document.getElementsByClassName('book')
let you = document.getElementById('you')
let Mains = document.getElementById('Mains')
let Desserts = document.getElementById('Desserts')
let Drinks = document.getElementById('Drinks')
let desserts = document.getElementById('desserts')
let main = document.getElementById('main')
let drinks = document.getElementById('drinks')

let clickOpen = () => {
    ul.style.left = "0%"
    menu.style.display = "none"
    arrow.style.display = "block"
}
let clickClose = () => {
    ul.style.left = "-100%"
    menu.style.display = "block"
    arrow.style.display = "none"
}

Mains.addEventListener('click', () => {
    main.style.display = 'block'
    desserts.style.display = 'none'
    drinks.style.display = 'none'
})
Desserts.addEventListener('click', () => {
    desserts.style.display = 'block'
    main.style.display = 'none'
    drinks.style.display = 'none'
})
Drinks.addEventListener('click', () => {
    drinks.style.display = 'block'
    main.style.display = 'none'
    desserts.style.display = 'none'

})


