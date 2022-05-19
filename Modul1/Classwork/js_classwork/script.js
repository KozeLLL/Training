// /**
//  * Завдання.
//  *
//  * Створити об'єкт користувача, який має три властивості:
//  * - Ім'я;
//  * - Прізвище;
//  * - Професія.
//  *
//  * А також одним методом sayHi, який виводить у консоль повідомлення 'Привіт.'.
//  */
// // let user = {
// //     name: "Roman",
// //     surname: "Karasevych",
// //     profession: "developer",
// // }
// // user.sayHi = () => alert("Привіт!");
// //
// // user.sayHi( )
//
// /** Запитати в користувача ім'я, прізвище і чи хоче він сти.
//  Перевірити, що користувач щось увів під час введення імені чи прізвища.
//  Інакше - перепитувати.
//  Записати отримані дані в об'єкт Person.
//  В об'єкті створити 2 методи - eat, завдання якого виводити алерт із текстом
//  "Піду поїм", go, завдання якого виводити алерт із текстом "Тоді я пішов".
//
//  Якщо користувач вказав, що хоче їсти, викликати метод eat, інакше - метод go.  */
//
// // let userName = prompt("what is your name?");
// // let userSurname = prompt("what is your surname?");
// // let angryQuestion = confirm("are you hungry?");
// //
// // while (userName.length < 3 || !isNaN(+userName)) {
// //     userName = prompt(`${userName} is invalid name. Type again.`);
// // }
// // while (userSurname.length < 3 || !isNaN(+userSurname)) {
// //     userSurname = prompt(`${userSurname} is invalid surname. Type again.`);
// // }
// //
// // const person = {
// //     userName,
// //     userSurname,
// //     angry: angryQuestion,
// //     userAction() {
// //         this.angry ? alert("Піду поїм") : alert('go')
// //     },
// // }
// // person.userAction()
// // console.log(person)
// // console.log(userSurname)
//
// // const danItStudent = {
// //     name: "Vika",
// //     lastName: "Obodovska",
// //     homeworks: 15
// // }
// //
// // const property = prompt("Що ви хочете дізнатись про студента?");
// //
// // const {name, lastName, homeworks} = danItStudent
// //
// // if (property === "name" || property === "iм'я") {
// //     console.log(name)
// // } else if (property === "lastName" || property === "прізвище") {
// //     console.log(lastName)
// // } else if (property === "оцінка" || property === "homeworks") {
// //     console.log(homeworks)
// // } else {
// //     console.log("Вибачте таких даних нема")
// // }
//
// // const danItStudent = {
// //     firstName: "Mariia",
// //     lastName: "Koval",
// //     numberOfSubmittedHomewors: 6
// // }
// //
// // console.log(danItStudent);
// // let askProperty = prompt("Яку властивість ви хочете змінити?"); //
// // let askValue = prompt("На яке значення?");
// //
// // if (danItStudent.hasOwnProperty(askProperty)) {
// //     console.log(askProperty)
// //     danItStudent[askProperty] = askValue;
// // }
// //
// // console.log(danItStudent);
// let name = prompt("Введіть ім'я", " `   Jack");
// let lastName = prompt("Введіть прізвище", "White");
// let age = +prompt("Введіть Ваш вік", "20");
// while (!age || age < 15 || age > 100) {
//     age = +prompt("Введіть Ваш вік", "20");
// }
// let haveKids = confirm("чи є діти");
// let eyesColor = prompt("якого кольору очі?", "blue");
//
// const Person = {
//     name,
//     lastName,
//     age,
//     haveKids,
//     eyesColor
// };
//
// for (const key in Person) {
//     console.log(key);
//     console.log(`Властивість ${key}: ${Person[key]}`);
// }
//
// Створити дату
// важливість: 5
// Створити об’єкт Date на дату: 20 лютого 2012, 3:12 ранку. Часовий пояс є місцевим.
//
//     Показати його за допомогою alert.
//
// let date = new Date(2012, 1, 20, 3, 12 )
// alert(date)
/**
 * ЗАДАНИЕ 3
 *
 * Записать в переменную '123', вывести в консоль typeof этой переменной.
 * Преобразовать эту переменную в численный тип при помощи parseInt(), parseFloat(), унарный плюс +
 * После этого повторно вывести в консоль typeof этой переменной.
 */

// let number = "123.54"
//
// console.log(typeof number);
// console.log(typeof parseInt(number));
// console.log(typeof parseFloat(number));
// console.log(typeof +number);
// console.log( parseInt(number));
// console.log( parseFloat(number));
// console.log( +number);
/**
 * ЗАДАНИЕ 4
 *
 * Вывести на экран уведомление с текстом "Hello! This is alert" при помощи модального окна alert.
 */
// alert("hello! this is alert")
/**
 * ЗАДАНИЕ 5
 *
 * Вывести на экран модальное окно prompt с сообщением "Enter the number".
 * Результат выполнения модального окна записать в переменную, значение которой вывести в консоль.
 */
// const number = prompt("enter the number");
// console.log(number);
/**
 * ЗАДАНИЕ 6
 *
 * При помощи модального окна prompt получить от пользователя два числа.
 * Вывести в консоль сумму, разницу, произведение, результат деления и остаток от деления их друг на друга.
 */
// const number0 = +prompt("enter the number0");
// const number1 = +prompt("enter the number1");
// const dilennya = number0 / number1;
// console.log(number0 + number1);
// console.log(number0 - number1);
// console.log(number0 * number1);
// console.log(number0 / number1);
// // console.log(parseInt(dilennya))
// console.log(number0 % number1);
/**
 * ЗАДАНИЕ 10
 *
 * С помощью модальных окон получить от пользователя 3 числа и вывести в консоль их среднее арифметическое значение.
 *
 * Если в качестве одного из трёх значений пользователь ввёл не число — вывести сообщение:
 * «⛔️ Ошибка! Все три введённых значения должны быть числами!».
 * Среднее арифметическое значение в таком случае вычислять не нужно.
 */
// let number0 = +prompt("enter the number0");
// let number1 = +prompt("enter the number1");
// let number2 = +prompt("enter the number1");
//
// let serednieAryfmetychne = (number0+number1+number2)/3;
// console.log(serednieAryfmetychne);
/**
 * Задание 1.
 *
 * Написать функцию-сумматор.
 * Функция обладает двумя числовыми параметрами, и возвращает результат их сложения.
 */


// const summ = function (a, b) {
//     return a + b;
// }
// console.log(summ(4, 6));

// const minNumber = function (a, b) {
//     // if (a > b) {
//     //     return b
//     // } else {
//     //     return a
//     // }
//     // return a > b ? b : a
//     return Math.min (a, b)
// }
// console.log(minNumber(10, 1));


/**
 * Задание 2.
 *
 * Написать функцию, которая определяет количество переданных аргументов, и возвращает их количество.
 */

// let returnNumbers = function () {
//     console.log(arguments.length);
// }
// returnNumbers()
// returnNumbers(2,3)
//
// let getNumbers = () => console.log(arguments.length);
//
// getNumbers(80, 20, 50) // в стрелочной функции нету аргументов

/**
 * Задание 10.
 *
 * Написать функцию-логгер log, которая выводит в консоль сообщение указанное количество раз.
 *
 * Функция обладает двумя параметрами:
 * - Первый — строковый тип, сообщение для вывода;
 * - Второй — числовой тип, количество выводов сообщения.
 *
 * Задать значения по-умолчанию для обеих параметров:
 * - Для первого — «Внимание! Сообщение не указано.»;
 * - Для второго — 1;
 *
 * Если первый аргумент(сообщение) не передан - ПО УМОЛЧАНИЮ присвоить этому аргументу - "Empty message"
 * Если второй аргумент(количество раз) не передан - ПО УМОЛЧАНИЮ присвоить этому аргументу значение 1.
 */
/**
 * Задание 1.
 *
 * Написать программу-помощник преподавателя.
 *
 * Будем использовать американскую систему оценивания знаний.
 * Эта система работает на баллах и оценках в виде букв.
 * Расшифровывается следующим образом:
 *
 * Баллы  | Оценка |
 * 95-100 | A      |
 * 90-94  | A-     |
 * 85-89  | B+     |
 * 80-84  | B      |
 * 75-79  | B-     |
 * 70-74  | C+     |
 * 65-69  | C      |
 * 60-64  | C-     |
 * 55-59  | D+     |
 * 50-54  | D      |
 * 25-49  | E      |
 * 0-24   | F      |
 * -----------------
 *
 * Программа должна спрашивать имя и фамилию студента, а также количество баллов, которое на набрал.
 *
 * Программа должна повторно запрашивать данные, если были некорректно введены:
 * - Имя студента (строка, состоящая минимум из двух слов); https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/split
 * - Количество баллов, которое набрал студент (число от 0 до 100).
 *
 * Если все данные данные введены верно, программа конвертирует
 * числовое количество баллов в буквенную оценку и выводит сообщение в консоль:
 * «К студенту ИМЯ_СТУДЕНТА прикреплена оценка «ОЦЕНКА».».
 *
 * После выведения этого сообщения программа должна спросить,
 * есть-ли необходимость сконвертировать оценку для ещё одного студента,
 * и должна начинать свою работу сначала до тех пор, пока пользователь не ответит «Нет.».
 *
 * Когда пользователь откажется продолжать работу программы, программа выводит сообщение:
 * «✅ Работа завершена.».
 */

// const userScores = () => {
//     let userName = prompt("Enter name ");
//     while (!Boolean(userName)) {
//         userName = prompt("Enter valid name")
//     }
//     let userSurname = prompt("Enter  surname");
//     while (!Boolean(userName)) {
//         userSurname = prompt("Enter valid surname")
//     }
//     let userScore = Number(prompt("Enter score"));
//     while (userScore === null || isNaN(userScore) || userScore > 100 || userScore < 0) {
//         userScore = Number(prompt("Enter valid score"));
//     }
//     let userMark = null;
//     if (userScore>=0 && userScore) {
//         userMark = "F"
//     } else if (userScore >= 25 && userScore <= 49) {
//         userMark = "E"
//     } else if (userScore >= 50 && userScore <= 54) {
//         userMark = "D"
//     } else if (userScore >= 55 && userScore <= 59) {
//         userMark = "D+"
//     }else if (userScore >= 60 && userScore <= 64) {
//         userMark = "C-"
//     }else if (userScore >= 65 && userScore <= 69) {
//         userMark = "C"
//     }else if (userScore >= 70 && userScore <= 74) {
//         userMark = "C+"
//     }else if (userScore >= 75 && userScore <= 79) {
//         userMark = "B-"
//     }else if (userScore >= 80 && userScore <= 84) {
//         userMark = "B"
//     }else if (userScore >= 85 && userScore <= 89) {
//         userMark = "B+"
//     }else if (userScore >= 90 && userScore <= 94) {
//         userMark = "A-"
//     }else if (userScore >= 95 && userScore <= 100) {
//         userMark = "A"
//     }
//     alert(`К студенту ${userName} ${userSurname} прикреплена оценка ${userMark}`)
// }
// userScores()
/**
 * Задание 3.
 *
 * Написать функцию-счётчик increment.
 *
 * Первый вызов функции должен вернуть 0.
 * Каждый новый вызов функции должен возвращать число, на 1 больше, чем предыдущее.
 *
 * Продвинутая сложность:
 * - На техническом языке подробно объяснить механизм решения.
 */
// let i = 0
// let increment = () => {
//     return i++
// }
// console.log(increment());
// console.log(increment());
// console.log(increment());
// console.log(increment());
// console.log(increment());
// console.log(increment());
// console.log(increment());
// console.log(increment());
// console.log(increment());
// console.log(increment());
// console.log(increment());

/**
 * Задание 8.
 *
 * Напишите программу «Кофейная машина».
 *
 * Программа принимает монеты и готовит напитки:
 * - Кофе за 25 монет;
 * - Капучино за 50 монет;
 * - Чай за 10 монет.
 *
 * Чтобы программа узнала что делать, она должна знать:
 * - Сколько монет пользователь внёс;
 * - Какой он желает напиток.
 *
 * В зависимости от того, какой напиток выбрал пользователь,
 * программа должна вычислить сдачу и вывести сообщение в консоль:
 * «Ваш «НАЗВАНИЕ НАПИТКА» готов. Возьмите сдачу: «СУММА СДАЧИ».".
 *
 * Если пользователь ввёл сумму без сдачи — вывести сообщение:
 * «Ваш «НАЗВАНИЕ НАПИТКА» готов. Спасибо за сумму без сдачи! :)"
 */

const coffeMachine = () => {
    const coffeCost = 25;
    const capuccinoCost = 50;
    const teaCost = 10;

    let payLoad = Number(prompt("Внесите деняк"))
    let drinkChoise = prompt("Выберите напиток: кофе капучино или чай")

    if(drinkChoise === "coffe") {
        if(payLoad === coffeCost) {
            console.log(`Ваш ${drinkChoise} готов. Спасибо за сумму без здачи!`)
        } else if (payLoad < coffeCost) {
            console.log("Денег недостаточно")
        } else {
            console.log(`Ваш ${drinkChoise} готов, ваша здача.`)
        }
    }
}
