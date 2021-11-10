const toggle = document.querySelector(".toggle")
const nav = document.querySelector("#nav")


const wrapper = document.querySelector(".wrapper")
const closeNav = document.querySelector("#close-nav")


const links = document.querySelectorAll("nav li")

toggle.addEventListener("click", () => {
    nav.classList.toggle("nav-closed");
})
    ;



// closeNav.addEventListener("click", () => {
//     nav.classList.toggle("nav-closed");


// });
wrapper.addEventListener("click", (e) =>
    e.target !== nav ? nav.classList.add("nav-closed") : false


);

links.forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.add("nav-closed");
    })

});
