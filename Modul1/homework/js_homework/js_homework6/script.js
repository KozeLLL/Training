// Теоретичні питання
// Опишіть своїми словами, що таке екранування, і навіщо воно потрібне в мовах програмування - екрануванням можна виділити спеціальний символ, щоб використовувати його як звичайний
// Які засоби оголошення функцій ви знаєте? - function declaration, function expression, arrow function
// Що таке hoisting, як він працює для змінних та функцій? - hoisting (підняття) - механізм в js, який підіймає вверх області видимості оголошення змінних та функцій. Змінні треба оголошувати до того, як їх використовувати, інакше при використанні неоголошених змінних як let або const виникне помилка - reference error. При використанні var підняття ініціалізує змінну, але значення буде undefined.
//
//     Завдання
//     Доповнити функцію createNewUser() методами підрахунку віку користувача та його паролем. Завдання має бути виконане на чистому Javascript без використання бібліотек типу jQuery або React.
//
//     Технічні вимоги:
//     Візьміть виконане домашнє завдання номер 5 (створена вами функція createNewUser()) і доповніть її наступним функціоналом:
//     При виклику функція повинна запитати дату народження (текст у форматі dd.mm.yyyy) і зберегти її в полі birthday.
//     Створити метод getAge() який повертатиме скільки користувачеві років.
//     Створити метод getPassword(), який повертатиме першу літеру імені користувача у верхньому регістрі, з'єднану з прізвищем (у нижньому регістрі) та роком народження. (наприклад, Ivan Kravchenko 13.03.1992 → Ikravchenko1992.
// Вивести в консоль результат роботи функції createNewUser(), а також функцій getAge() та getPassword() створеного об'єкта.


const createNewUser = function () {
    const user = {
        firstName: prompt("What is your name?") || "",
        lastName: prompt("What is your surname?") || "",
        birthday: +prompt("Enter your birth date (dd.mm.yyyy)") || 0,
        today: Date.now(),
        get getLogin() {
            return `${this.firstName[0].toLowerCase() + this.lastName}`
        },
        get getAge() {
            return `${this.today - this.birthday}`
        },
    }
    user.getAge
    user.getLogin
    return user
}

const person = new createNewUser()
console.log(person);
