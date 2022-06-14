const openMenuButton = document.getElementById('open-menu-button')
const closeMenuButton = document.getElementById('close-menu-button')
const menu = document.getElementById('menu')
const overlay = document.getElementById('overlay')

function handleToggleMenu() {
  menu.classList.toggle('menu--active')
  overlay.classList.toggle('overlay--active')
}

openMenuButton.addEventListener('click', handleToggleMenu)
closeMenuButton.addEventListener('click', handleToggleMenu)
overlay.addEventListener('click', handleToggleMenu)
