const openBtn = document.getElementById('open-btn')
const burger = document.querySelector('.burger-line')
const nav = document.getElementById('nav')
const links = document.querySelectorAll('nav > a')

openBtn.addEventListener('click', function() {
  openBtn.classList.toggle("close-burger")
  nav.classList.toggle("show-side-menu")
})

links.forEach(link => {
  link.addEventListener('click', function() {
    nav.classList.remove("show-side-menu")
    openBtn.classList.toggle("close-burger")
  });
})

const windowSize = window.innerHeight - 50

window.addEventListener('scroll', function() {
  if (window.scrollY > windowSize) {
    openBtn.style.backgroundColor = '#1E1D3E'
    openBtn.style.borderRadius = '10rem'
  }  
})

