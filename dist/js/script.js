window.onscroll = function () {
  const header = document.querySelector('header')
  const fixed = header.offsetTop

  if (window.pageYOffset > fixed) {
    header.classList.add('.navbar-fixed')
  }else {
    header.classList.remove('.navbar-fixed')
  }

  console.log(fixed)
  console.log(window.pageYOffset)
}




const hamberger = document.querySelector('#hamberger')

hamberger.addEventListener('click', function() {
  hamberger.classList.toggle('.hamberger-active')
  console.log('di klik')
})