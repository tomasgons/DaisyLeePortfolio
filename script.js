const hatSlide = document.querySelector(".hatslide")
const hatImages = document.querySelectorAll(".hatslide img")
const prevBtn = document.querySelector("#prevButton")
const nextBtn = document.querySelector("#nextButton")
const toggle = document.querySelector(".toggle")
const nav = document.querySelector("#nav")
const wrapper = document.querySelector(".wrapper")
const closeNav = document.querySelector("#close-nav")
const links = document.querySelectorAll("nav li")


toggle.addEventListener("click", () => {
    nav.classList.toggle("nav-closed");
})
    ;




wrapper.addEventListener("click", (e) =>
    e.target !== nav ? nav.classList.add("nav-closed") : false


);

links.forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.add("nav-closed");
    })

});

// ImageSlide
let counter = 1;
const size = hatImages[0].clientWidth;

hatSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'

nextBtn.addEventListener('click', () => {
    hatSlide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    hatSlide.style.transform = hatSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
    console.log('check')
});

prevBtn.addEventListener('click', () => {
    hatSlide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    hatSlide.style.transform = hatSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
});

hatSlide.addEventListener('transitionend', () => {
    if (hatImages[counter].id === 'lastClone') {
        hatSlide.style.transition = "none";
        counter = hatImages.length - 2
        hatSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
    }
    if (hatImages[counter].id === 'firstClone') {
        hatSlide.style.transition = "none";
        counter = hatImages.length - counter;
        hatSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    }
});
