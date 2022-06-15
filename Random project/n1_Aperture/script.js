const navList = document.querySelectorAll('.list-item-text');
const ulNavList = document.querySelector('.nav-menu-list');

ulNavList.addEventListener('click', ((e)=>{
    if (e.target.tagName === "A" ) {
        navList.forEach((link)=>{
            if(link.classList.contains('nav-click')){
                link.classList.remove('nav-click')
            }
        })
        e.target.classList.add('nav-click')
    }
}))
console.log(navList);
