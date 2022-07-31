const btnMenu = document.querySelectorAll(".btn__menu");
const navBtnMenu = document.querySelector(".nav-btn__menu");
const navMenu = document.querySelector(".nav__menu");

navBtnMenu.addEventListener('click', (event) => {
    console.log(event);
    event.preventDefault()
    btnMenu.forEach((item) => {
        item.classList.toggle("didnt-active")
    })
    navMenu.classList.toggle("nav__menu-hide")
})