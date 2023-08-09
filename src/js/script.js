const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close')

hamburger.addEventListener('click', () =>{
    menu.classList.add('active')
})

closeElem.addEventListener('click', () =>{
    menu.classList.remove('active' )
})

const counters = document.querySelectorAll('.works__ratings_counter'),
    line = document.querySelectorAll('.works__ratings_line span')

counters.forEach((item, i) => {
        line[i].style.width = item.innerHTML
})