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

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  grabCursor: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    360: {
      spaceBetween: 50
    },
    576: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 100
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 100
    }
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
})
