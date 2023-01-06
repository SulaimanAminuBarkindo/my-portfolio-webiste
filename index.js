const menu = document.querySelector('.menu')

menu.addEventListener('click', toggleMenu)

function toggleMenu(){
    menu.classList.toggle('open-menu')
}