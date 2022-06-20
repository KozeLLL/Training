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



const tabsFn = (event) => {
    const id = event.target.getAttribute('data-tab');
    const activeElement =  document.getElementById(id)

    toggleCssClass(tabItems, 'btn-active', event.target)
    toggleCssClass(containers, 'active', activeElement)
}

tabs.addEventListener('click', (event)=>{
    if(event.target.nodeName === 'BUTTON'){
        tabsFn(event);
    }
})
