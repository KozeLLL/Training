const btnMenu=document.querySelectorAll(".btn__menu"),navBtnMenu=document.querySelector(".nav-btn__menu"),navMenu=document.querySelector(".nav__menu");navBtnMenu.addEventListener("click",e=>{console.log(e),e.preventDefault(),btnMenu.forEach(e=>{e.classList.toggle("didnt-active")}),navMenu.classList.toggle("nav__menu-hide")});