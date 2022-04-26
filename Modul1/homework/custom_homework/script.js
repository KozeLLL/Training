console.log('kek')

// Завдання
// Реалізувати програму на Javascript, яка знаходитиме всі числа кратні 5 (діляться на 5 без залишку) у заданому діапазоні. Завдання має бути виконане на чистому Javascript без використання бібліотек типу jQuery або React.
//
//   Технічні вимоги:
//   Отримати за допомогою модального вікна браузера число, яке введе користувач.
//   Вивести в консолі всі числа, кратні 5, від 0 до введеного користувачем числа. Якщо таких чисел немає - вивести в консоль фразу "Sorry, no numbers"
// Обов'язково необхідно використовувати синтаксис ES6 (ES2015) для створення змінних.

// Необов'язкове завдання підвищеної складності

// Перевірити, чи введене значення є цілим числом. Якщо ця умова не дотримується, повторювати виведення вікна на екран, доки не буде введено ціле число.
//   Отримати два числа, m і n. Вивести в консоль усі прості числа (http://ru.math.wikia.com/wiki/%D0%9F%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%B5_%D1%87%D0%B8%D1%81%D0%BB%D0%BE) в діапазоні від m до n (менше із введених чисел буде m, більше буде n). Якщо хоча б одне з чисел не відповідає умовам валідації, зазначеним вище, вивести повідомлення про помилку і запитати обидва числа знову.


let enterNumber = +prompt("Enter your number");

let counter = 0
// приклад з де рахується скільки чисел кратних 5 буду виведено
if (enterNumber >= 3) {
  for (let i = 3; i < enterNumber; i++) {
    if (i % 3 === 0) {
      counter++ // збільшую каутер на 1
    }
  }
} else {
  console.log("Sorry, no numbers")
}
console.log("кількість чисел кратним 3",counter)

// дістаємо всі елементи lists__item
const items = document.querySelectorAll('.lists__item')

// перебираємо масив items де  items[i] буду елемент по порядку

// for (let i = 0; i <= items.length; i++) {
//   console.log(i);
//   console.log(items[i]);
//   if(i % 2 === 0){ // перевіряємо чи кратне 2
//     items[i].classList.add('lists__item--active') // додаємо відповідний клас
//   }
// }

// такі самі дії але через метод масиву forEach
items.forEach((items, index)=>{
  if(index % 2 === 0){
    items.classList.add('lists__item--active')
  }
})


// отримуємо один lists
const listItem = document.querySelector('.lists')

// додаємо на нього слухач подій ( типу кліс)
listItem.addEventListener('click', (e) => {
  console.log(e.target); // місце де саме відбувся клік
  const cursorTarget  = e.target
  cursorTarget.classList.toggle('lists__item--active') // тоглимо (тобото даем клас якщо його немає і забираємо якзо є) відповідному елементу класс
})

const kek = (num1 , num2, action ) =>{
  switch (action){
    case '+':return num1 + num2;
    case "-":return num1 - num2;
    case "*":return num1 * num2;
    case '/':return num1 / num2
  }
}
console.log(kek(1,2, "+"));


