const header = document.querySelector('header')
document.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('ativo')
  } else {
    header.classList.remove('ativo')
  }
})
