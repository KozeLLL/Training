const tabItems = document.querySelectorAll('[data-tab]');
const tabs = document.querySelector(".tab-menu");
const containers = document.querySelectorAll('.tab-content-item');

const toggleCssClass = (nodeArr, cssClass, activeElement) => {
    nodeArr.forEach((nodeItem) => {
        if (nodeItem.classList.contains(cssClass)) {
            nodeItem.classList.remove(cssClass)
        }
    })
    activeElement.classList.add(cssClass)
}

const checkHeaderStyle = (NodeEll, cssClass) =>{
    if (scrollY >= window.innerHeight) {
        NodeEll.classList.add(cssClass)
    }
    if (scrollY < window.innerHeight && header.classList.contains(cssClass)) {
        NodeEll.classList.remove(cssClass)
    }
}
const tabsFn = (event) => {
    const id = event.target.getAttribute('data-tab');
    const activeElement = document.getElementById(id)

    toggleCssClass(tabItems, 'btn-active', event.target)
    toggleCssClass(containers, 'active', activeElement)
}

tabs.addEventListener('click', (event) => {
    if (event.target.nodeName === 'BUTTON') {
        tabsFn(event);
    }
})

const galleryMenu = document.querySelector(".gallery-menu");
const galleryMenuCategories = document.querySelectorAll(".filter-tab");
const galleryItems = document.querySelectorAll('.gallery-content-container');
const loadMoreBtn = document.querySelector('.load-more-link')

galleryMenu.addEventListener("click", (event) => {
    if (event.target.nodeName === "BUTTON") {
        const id = event.target.id
        toggleCssClass(galleryMenuCategories, 'kek', event.target)
        galleryItems.forEach((item, index) => {
            item.classList.remove('active')
            if (item.dataset.category === id) {
                item.classList.add('active')
            }
            if (id === 'all' && index < 12) {
                item.classList.add('active')
                if (loadMoreBtn.classList.contains('hide')) {
                    loadMoreBtn.classList.remove('hide')
                }

            }
        })
        if (id !== 'all') {
            loadMoreBtn.classList.add('hide')
        }
    }
})

loadMoreBtn.addEventListener('click', (event) => {
    galleryItems.forEach((items, index) => {
        event.preventDefault()
        if (items.classList.contains('active')) {
            items.classList.remove('active')
        }
        if (index < 24) {
            items.classList.add('active')
        }
    })
    loadMoreBtn.classList.add('hide')
})

const header = document.querySelector('.ham-header')

document.addEventListener("scroll", (e) => {
    requestAnimationFrame(() => {
        checkHeaderStyle(header, 'ham-header--dark')
    })
})

window.addEventListener('DOMContentLoaded', (event) => {
    const swiper = new Swiper('.swiper', {
        speed: 300,
        spaceBetween: 0,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '"></span>';
            },
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        keyboard: true,
        initialSlide: 2

    });
    checkHeaderStyle(header, 'ham-header--dark')

});