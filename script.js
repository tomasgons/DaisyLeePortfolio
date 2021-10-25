const toggle = document.querySelector(".toggle")
const nav = document.querySelector("#nav")


const container = document.querySelector(".container")
const closeNav = document.querySelector("#close-nav")


const links = document.querySelectorAll("nav li")

toggle.addEventListener("click", () => {
    nav.classList.toggle("nav-closed");
})
    ;



// closeNav.addEventListener("click", () => {
//     nav.classList.toggle("nav-closed");


// });

links.forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.add("nav-closed");
    })

});
