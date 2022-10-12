const header = document.querySelector('header')
document.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('ativo')
  } else {
    header.classList.remove('ativo')
  }
})

const btnMobile = document.querySelector('header .btn-mobile-menu')
const menu = document.querySelector('header nav.menu-header')

if (btnMobile) {
  btnMobile.addEventListener('click', () => {
    btnMobile.classList.toggle('active')
    menu.classList.toggle('active')
  })
}
