const openMenuButton = document.getElementById('open-menu-button')
const closeMenuButton = document.getElementById('close-menu-button')
const menu = document.getElementById('menu')

function handleToggleMenu() {
  if (menu.classList.contains('active')) {
    menu.classList.remove('active')
  } else {
    menu.classList.add('active')
  }
}

openMenuButton.addEventListener('click', handleToggleMenu)
closeMenuButton.addEventListener('click', handleToggleMenu)
