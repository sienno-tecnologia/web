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

// let currentCarouselItem = 0
// // CAROUSEL ----

// //

// const members = [
//   {
//     name: 'Miguel Costa',
//     role: 'Programador',
//     bio: 'deixa',
//   },
//   {
//     name: 'Sabrina Ferreira',
//     role: 'Designer',
//     bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, sed porro similique assumenda illum nostrum sequi corrupti ipsa enim.',
//   },
//   {
//     name: 'Maria Rito',
//     role: 'Designer',
//     bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, sed porro similique assumenda illum nostrum sequi corrupti ipsa enim.',
//   },
//   {
//     name: 'Alexsandro Chaves',
//     role: 'Pesquisador',
//     bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, sed porro similique assumenda illum nostrum sequi corrupti ipsa enim.',
//   },
//   {
//     name: 'Gustavo Souza',
//     role: 'Pesquisador',
//     bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, sed porro similique assumenda illum nostrum sequi corrupti ipsa enim.',
//   },
//   {
//     name: 'Beatriz Oliveira',
//     role: 'Pesquisadora',
//     bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, sed porro similique assumenda illum nostrum sequi corrupti ipsa enim.',
//   },
//   {
//     name: 'Pedro Bezerra',
//     role: 'Gestor',
//     bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, sed porro similique assumenda illum nostrum sequi corrupti ipsa enim.',
//   },
//   {
//     name: 'Vinicius Santos',
//     role: 'Programador',
//     bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, sed porro similique assumenda illum nostrum sequi corrupti ipsa enim.',
//   },
//   {
//     name: 'Ayrton Demétrio',
//     role: 'Designer',
//     bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, sed porro similique assumenda illum nostrum sequi corrupti ipsa enim.',
//   },
//   {
//     name: 'Gabriel Gomes',
//     role: 'Programador',
//     bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, sed porro similique assumenda illum nostrum sequi corrupti ipsa enim.',
//   },
// ]

// function createCarouselTemplate(name, bio, role) {
//   const parent = document.createElement('div')

//   parent.className = 'carousel-item'
//   parent.id = 'carousel-item'

//   const template = `
//       <div class="picture"></div>
//         <div class="content">
//           <h1>${name}</h1>
//           <h2 class="emphasis">${role}</h2>
//           <div class="icons">
//             <img src="./assets/github.webp" alt="github" />
//             <img src="./assets/linkedin.webp" alt="linkedin" />
//           </div>
//           <div class="github"></div>
//           <div class="linkedin"></div>
//           <p>
//               ${bio}
//           </p>
//         </div>
//   `

//   parent.innerHTML = template

//   return parent
// }

// const scrollRightBtn = document.getElementById('scroll-right-btn')
// const scrollLeftButton = document.getElementById('scroll-left-btn')
// const carouselContainer = document.getElementById('carousel')

// scrollRightBtn.addEventListener('click', () => {
//   const carouselItem = document.getElementById('carousel-item')
//   carouselContainer.scrollLeft += carouselItem.offsetWidth

//   if (currentCarouselItem < members.length) currentCarouselItem++

//   console.log(currentCarouselItem)
// })

// scrollLeftButton.addEventListener('click', () => {
//   const carouselItem = document.getElementById('carousel-item')
//   carouselContainer.scrollLeft -= carouselItem.offsetWidth

//   if (currentCarouselItem > 0) currentCarouselItem--

//   console.log(currentCarouselItem)
// })
// ;(() => {
//   members.forEach(member => {
//     const template = createCarouselTemplate(
//       member.name,
//       member.bio,
//       member.role
//     )
//     carouselContainer.appendChild(template)
//   })
// })()
