const menuIcon = document.querySelector('.menu-icon')
const menuContainer = document.querySelector('.menu-container')
const body = document.querySelector('body')

menuIcon.addEventListener('click', toggleMenu)

window.onscroll = function() {
    scrollFunction()
}

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

function scrollFunction() {
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        const text = document.querySelector('.nav-container').style.backgroundColor = '#0a192ff8'
        document.querySelector('.nav-container').style.boxShadow = '0px 0px 10px rgba(2, 12, 27)'
    } else {
        document.querySelector('.nav-container').style.backgroundColor = '#0a192f'
        document.querySelector('.nav-container').style.boxShadow = '0px 0px 0px'
    }
}

