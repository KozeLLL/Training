/*Які існують типи даних у Javascript?
number, bigInt, string, boolean, null, undefined, object, symbol

У чому різниця між == і ===?
ператор порівняння == при порівннні різних типів перетворює їх на числа
оператор строгої рівності === перевіряє рівність без перетворення типів

Що таке оператор?
 оператори - символи, завдяки яким виконуються дії над операндами або відбувається присвоєння: а = 4 - дорівнює виступає оператором присвоєння */

/* Отримати за допомогою модального вікна браузера дані користувача: ім'я та вік.
Якщо вік менше 18 років - показати на екрані повідомлення: You are not allowed to visit this website.
Якщо вік від 18 до 22 років (включно) – показати вікно з наступним повідомленням: Are you sure you want to continue? і кнопками Ok, Cancel. Якщо користувач натиснув Ok, показати на екрані повідомлення: Welcome,  + ім'я користувача. Якщо користувач натиснув Cancel, показати на екрані повідомлення: You are not allowed to visit this website.
Якщо вік більше 22 років – показати на екрані повідомлення: Welcome,  + ім'я користувача.
Обов'язково необхідно використовувати синтаксис ES6 (ES2015) для створення змінних.
Після введення даних додати перевірку їхньої коректності. Якщо користувач не ввів ім'я, або при введенні віку вказав не число - запитати ім'я та вік наново (при цьому дефолтним значенням для кожної зі змінних має бути введена раніше інформація). */

let userName = prompt("Enter your name");
let userAge = +prompt("Enter your age");

while (userName.length < 3 || !isNaN(+userName)) {
    userName = prompt(`${userName} is invalid name. Type again.`);
}
console.log(!isNaN(+userName))

while (+userAge <= 0 || isNaN(+userAge)) {
    userAge = +prompt(`${userAge} is not a number. Type again.`);
}

if (userAge < 18) {
    alert("You are not allowed to visit this website.")
} else if (userAge >= 18 && userAge <= 22) {
    let isContinue = confirm("Are you sure you want to continue")
    if (isContinue) {
        alert(`Welcome, ${userName}.`)
    } else {
        alert("You are not allowed to visit this website.")
    }
} else alert(`Welcome, ${userName}.`)
