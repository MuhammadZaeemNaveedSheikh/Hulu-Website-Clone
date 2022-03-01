const menuIcon = document.querySelector('.mobile-menu-icon')
const menuBackground = document.querySelector('.menu-background')
const header = document.querySelector('.header-main')
const mainNav = document.querySelector('.main-nav')

function show() {

    menuBackground.classList.toggle('display')
    header.classList.toggle('gradient')
    mainNav.classList.toggle('display')
    menuIcon.src = 'images/icon-close.svg'
}

menuIcon.addEventListener('click', show)