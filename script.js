
const toggle = document.querySelector(".toggle")
const nav = document.querySelector("#nav")
const wrapper = document.querySelector(".wrapper")
const closeNav = document.querySelector("#close-nav")
const links = document.querySelectorAll("nav li")
const header = document.querySelector(".header")

const slides = document.querySelectorAll(".mslide")

const prev = document.querySelector("#prev")
const next = document.querySelector("#next")
const auto = false;
const intervalTime = 5000;
let slideInterval;


const nextSlide = () => {
    const current = document.querySelector('.current')
    current.classList.remove('current')
    if (current.nextElementSibling) {
        current.nextElementSibling.classList.add('current')
    } else {
        slides[0].classList.add('current')
    }
    setTimeout(() => current.classList.remove('current'))
}

const prevSlide = () => {
    const current = document.querySelector('.current')
    current.classList.remove('current')
    if (current.previousElementSibling) {
        current.previousElementSibling.classList.add('current')
    } else {
        slides[slides.length - 1].classList.add('current')
    }
    setTimeout(() => current.classList.remove('current'))
}

next.addEventListener('click', nextSlide)
prev.addEventListener('click', prevSlide)

toggle.addEventListener("click", () => {
    nav.classList.toggle("nav-closed");
})
    ;




wrapper.addEventListener("click", (e) =>
    (e.target !== nav) ? nav.classList.add("nav-closed") : false


);

links.forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.add("nav-closed");
    })

});

