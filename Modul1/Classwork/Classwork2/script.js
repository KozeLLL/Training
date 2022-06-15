/**
 * Задание 2.
 *
 * Реализовать функцию addTodoItem которая будет получать из инпута значения и создавать новый пункт списка.
 */
// 1. Получить значение из инпута
// 2. Найти список
// 3. Записать значение инпута в елемент списка li
// 4. li отправить в ul

const addTodoItem = () => {
    const inputValue = document.querySelector(".input");
    const list = document.querySelector('#list');
    if (inputValue.value !== "") {
        list.insertAdjacentHTML('beforeend', `<li>${inputValue.value}</li>`);
        inputValue.value = '';
    }
}
