const hatSlide = document.querySelector(".hatslide")
const hatContainer = document.querySelector(".hatContainer")
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
    (e.target !== nav && e.target !== hatContainer) ? nav.classList.add("nav-closed") : false


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
    console.log('nxt')
    if (counter >= hatImages.length - 1) return;

    hatSlide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    hatSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

prevBtn.addEventListener('click', () => {
    console.log('prev')

    if (counter <= 0) return;
    hatSlide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    hatSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'

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
