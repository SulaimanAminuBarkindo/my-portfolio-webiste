const menuIcon = document.querySelector('.menu-icon')
const menuContainer = document.querySelector('.menu-container')
const body = document.querySelector('body')

menuIcon.addEventListener('click', toggleMenu)

function toggleMenu(){
    menuIcon.classList.toggle('open-menu-icon')
    menuContainer.classList.toggle('hide-menu-container')
    menuContainer.classList.toggle('open-menu-container')
}

