/**
 Реалізувати перемикання вкладок (таби) на чистому Javascript.

 Технічні вимоги:

 У папці tabs лежить розмітка для вкладок. Потрібно, щоб після натискання на вкладку відображався конкретний текст для
 потрібної вкладки. При цьому решта тексту повинна бути прихована. У коментарях зазначено, який текст має відображатися для якої вкладки.
 Розмітку можна змінювати, додавати потрібні класи, ID, атрибути, теги.
 Потрібно передбачити, що текст на вкладках може змінюватись, і що вкладки можуть додаватися та видалятися.
 При цьому потрібно, щоб функція, написана в джаваскрипті, через такі правки не переставала працювати.
 **/

const tabItem = document.querySelectorAll(".tabs-title");
const tabs = document.querySelector('.tabs');
const tabContainer = document.querySelectorAll('.tab-content');


const toggleCssClass = (nodeArr, cssClass, activeElement) => {
    nodeArr.forEach((nodeItem) => {
        if(nodeItem.classList.contains(cssClass)) {
            nodeItem.classList.remove(cssClass)
        }
    })
    activeElement.classList.add(cssClass);
}

const tabsFn = (event) => {
    const id = event.target.getAttribute('data-tab');
    const activeElement = document.getElementById(id)
    toggleCssClass(tabItem,  'active', event.target)
    toggleCssClass(tabContainer, 'active', activeElement)
}

tabs.addEventListener('click', (event)=>{
    if(event.target.nodeName === 'LI') {
        tabsFn(event)
    }

})