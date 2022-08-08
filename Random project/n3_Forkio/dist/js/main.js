const btnMenu = document.querySelectorAll(".nav-button");
const navBtnMenu = document.querySelector('.header__nav-button');
const navMenu = document.querySelector(".nav-hide");

navBtnMenu.addEventListener('click', (event)=> {
    console.log(event);
    event.preventDefault()
    btnMenu.forEach((item) => {
        item.classList.toggle('nav-button--hide')
    })
    navMenu.classList.toggle("nav-show")
})