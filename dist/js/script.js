const hamberger = document.querySelector('#hamberger')
const navMenu = document.querySelector('#menu')
const darkMode = document.querySelector('#darkmenu')
const html = document.querySelector('html')


window.onscroll = function () {
  const header = document.querySelector('.header')
  const fixed = header.offsetTop
  const top = document.querySelector('#top')

  if (window.pageYOffset > fixed) {
    header.classList.add('navbar-fixed')
    top.classList.remove('hidden')
  }else {
    header.classList.remove('navbar-fixed')
    top.classList.add('hidden')
  }
}

hamberger.addEventListener('click', function() {
  hamberger.classList.toggle('hamberger-active')
  navMenu.classList.toggle('hidden')
})

window.addEventListener('click', function (e) {
  if (e.target != hamberger && e.target != navMenu) {
    hamberger.classList.remove('hamberger-active')
    navMenu.classList.add('hidden')
  }
})

darkMode.addEventListener('click', function () {
  darkMode.checked ? html.classList.add('dark') : html.classList.remove('dark')
  darkMode.checked ? localStorage.theme = 'dark' : localStorage.theme = 'light'
})

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkMode.checked = true
} else {
  darkMode.checked = false
}
