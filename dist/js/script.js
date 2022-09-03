window.onscroll = function () {
  const header = document.querySelector('.header')
  const fixed = header.offsetTop

  if (window.pageYOffset > fixed) {
    header.classList.add('navbar-fixed')
  }else {
    header.classList.remove('navbar-fixed')
  }
}


const hamberger = document.querySelector('#hamberger')
const navMenu = document.querySelector('#menu')

hamberger.addEventListener('click', function() {
  hamberger.classList.toggle('hamberger-active')
  navMenu.classList.toggle('hidden')
})