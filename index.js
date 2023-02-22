const menuIcon = document.querySelector('.menu-icon')
const menuContainer = document.querySelector('.menu-container')
const body = document.querySelector('body')

menuIcon.addEventListener('click', toggleMenu)

function toggleMenu(){
    menuIcon.classList.toggle('open-menu-icon')
    menuContainer.classList.toggle('hide-menu-container')
    menuContainer.classList.toggle('open-menu-container')
}

function showExpText(className) {
    const sectToShow = document.querySelector(`.${className}`)
    const openedSect = document.querySelector('.show-experience-text')
    console.log(sectToShow)
    openedSect.classList.toggle('show-experience-text')
    sectToShow.classList.toggle('show-experience-text')
}

