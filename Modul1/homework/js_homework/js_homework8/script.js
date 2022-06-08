// Теоретичні питання
//
// Опишіть своїми словами що таке Document Object Model (DOM)
// Яка різниця між властивостями HTML-елементів innerHTML та innerText?
//     Як можна звернутися до елемента сторінки за допомогою JS? Який спосіб кращий?
//
//
//     Завдання
//     Код для завдань лежить в папці project.
//     Знайти всі параграфи на сторінці та встановити колір фону #ff0000
// Знайти елемент із id="optionsList". Вивести у консоль. Знайти батьківський елемент та вивести в консоль. Знайти дочірні ноди, якщо вони є, і вивести в консоль назви та тип нод.
//     Встановіть в якості контента елемента з класом testParagraph наступний параграф - This is a paragraph
// Отримати елементи, вкладені в елемент із класом main-header і вивести їх у консоль. Кожному з елементів присвоїти новий клас nav-item.
//     Знайти всі елементи із класом section-title. Видалити цей клас у цих елементів. - в розмітці нема елементів з класом section-titleю

const paragraf = document.querySelectorAll('p');
paragraf.forEach((item) => {
    item.style.backgroundColor = '#ff0000'
});
const optionalList = document.querySelector('#optionsList');
console.log(optionalList);
console.log(optionalList.parentElement);
console.log(optionalList.childNodes);
const testParagraph = document.querySelector("#testParagraph");
testParagraph.textContent = 'This is a paragraph';

const mainHeader = document.querySelector(".main-header");
[...mainHeader.children].forEach((item) => {
    item.classList.add("nav-item");
});

const findSectionTitle = document.querySelectorAll('.section-title');
console.log(findSectionTitle);

