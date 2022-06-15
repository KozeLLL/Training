/**
 * Завдання 4.
 *
 * При натисканні на кнопку Validate відображати
 * VALID зеленим кольром, якщо значення проходить валідацію
 * INVALID червоним кольором, якщо значення не проходить валідацію
 *
 * Правила валідації значення:
 * - значення не пусте
 *
 * ADVANCED
 * Правила валідації значення:
 * - повинно містити щонайменше 5 символів
 * - не повинно містити пробілів
 * - повинно починатися з літери (потрібно використати регулярні вирази)
 *
 */

// find input, button
// create validation func
// input red or green
// add message - invalid if red - valid if green
//

const input = document.querySelector('#input');
const button = document.querySelector('#validate-btn');

const validationFunc = (input) => {
    if (input.value === "" || input.value.length < 5 || input.value.includes(" ") || /\d/.test( input.value )) {
      input.style.borderColor = "red";
      let redError = document.createElement("p");
        redError.innerHTML = "<strong>invalid text</strong>";
        redError.style.color = 'red';
    button.after(redError)
    } else {
        input.style.borderColor = "green";
    }
    console.log(input.value.length);
}
button.addEventListener("click", () => {validationFunc(input)})
document.addEventListener("keyup", (event) => {
    if (event.code === 'Enter') {
        validationFunc(input)
    }
})

