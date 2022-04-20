// Получить от пользователя его имя.
// Записать полученное значение в переменную
// с названием userName.
// Вывести значение переменной на экран с помощью функции alert

// let getUserName=prompt("What is your name?");
// console.log(getUserName);
// alert(getUserName);

// Вывести в консоль результат сравнения числа 24 и строки
// с значением '24'. Вывести результат строгого и нестрогого сравнений
// const number=24;
// const string="24";
// console.log(number === string);
// console.log(number == string,"soft");
// console.log(string + string);
// console.log(+string + number.toString());

// Получить от пользователя его имя.
// Записать полученное значение в переменную
// с названием userName. Получить от пользователя его фамилию.
// Записать в переменную. Вывести в консоль фразу
// `Ваше имя ${значение переменной имени}, фамилия - ${значение переменной фамилии}`

// let userName=prompt("what is ur name?");
// let surName=prompt("what is ur surname?");
//
// console.log(`Ваше имя ${userName}, фамилия - ${surName}`)

// Спросить у пользователя его имя.
// В следующем окне спросить у пользователя его фамилию.
// В следущем окне спросить у пользователя его год рождения.
// Вывести для пользователя - его имя, фамилию и его возраст.

// let userName=prompt("ur name?");
// let surName=prompt("ur surname?");
// let userBirthday=prompt("ur birthday");
// alert(`Ur Name ${userName}, Ur surname ${surName}, Ur birthday ${userBirthday}`);

// Вывести модальное окно с вопросом “Ты голоден?”.
// Получить от пользователя подтверждение или ответ нет.
// Если пользователь согласился - вывести в консоль массив с названиями ресторанов
//  - Napule, Sofra, ШО.
//  Если не согласен, вывести модальное окно с фразой “ок”.

// let areYouHungry = confirm("Are you hungry?");
// console.log(areYouHungry);
// if (areYouHungry) {
//     console.log('kek')
// } else {
//     console.log('ok')
// }

/// перше число 5
/// други число 6
/// якщо сумма більше або рівна 10 вивести кек в консоль

// let sum=6;
// if (sum>=10) {
//     console.log('kek')
// } else {
//     console.log('pishovNaHuy')
// }

// Объявите три переменных: hour, minute, second. Присвойте им следующие значения:
// 10, 40, 25. Выведите в консоль время в формате 10:40:25.

/// перше число 5
/// други число 46
/// якщо сума більше або рівна 10 вивести кек в консоль
/// якщо сума дорівнює 51 вивести не кек в консоль
/// в інших випадках вивести в консоль бібу

// let sum = 5 + 46
//
// if (sum >= 10) {
//     console.log("kek")
// } else if (sum === 51) {
//     console.log("neKek")
// } else {
//     console.log("8===>");
// }

// Пользователь вводит в модальное окно любое число.
// Если пользователь ввёл не число,
// вывести новое модальное окно с сообщением «Необходимо ввести число!».

// В консоль вывести сообщение:
// - Если число чётное, вывести в консоль сообщение «Ваше число чётное.»;
// - Если число не чётное, вывести в консоль сообщение «Ваше число не чётное.»;

// // ask user smth and convert to number
// let num = +prompt('Number')
// // check that num is NaN (not a number)
// // NaN === NaN ---> false
// while (typeof num === 'number') {
//     num = +prompt('Number again please')
// }
//
// if (num % 2 === 0) {
//     console.log('Your number is even')
// } else {
//     console.log('Your number is odd')
// }

// Написать программу, которая будет приветствовать пользователя.
// Сперва пользователь вводит своё имя, после чего программа выводит
// в консоль сообщение с учётом его должности.

// Например 'Добро пожаловать, CEO Mike'

//  Список должностей:
//   Mike — CEO;
//   Jane — CTO;
//   Walter — программист:

//   Если введёно не известное программе имя — вывести user-y сообщение «Пользователь не найден.».

//   Выполнить задачу в двух вариантах:
//   - используя конструкцию if/else if/else;
//   - используя конструкцию switch.

// let ceo="Mike"
// let cto="Jane"
// let programmer="Walter"
// let userName=prompt("enter your name")
//
// // if (userName === ceo.toLowerCase()) {
// //     console.log (`Dobro pojalovat ceo ${ceo}`)
// // } else if (userName === cto.toLowerCase()) {
// //     console.log(`Dobro pojalovat cto ${cto}`)
// // } else if (userName === programmer.toLowerCase()) {
// //     console.log(`Dobro pojalovat programmer ${programmer}`)
// // }
// switch (userName) {
//     case (ceo) :
//         console.log(`Dobro pojalovat ceo ${ceo}`)
//         break;
//     case (cto) :
//         console.log(`Dobro pojalovat cto ${cto}`)
//         break;
//     case (programmer) : console.log(`Dobro pojalovat programmer ${programmer}`)
//         break;
//     default : console.log("go away")
// }
/**
 * Задание.
 *
 // с помощью document.write выведите числа от 1 до 100.

 // с помощью document.write выведите четные числа в промежутке от 0 до 100.

 // С помощью цикла найдите сумму чисел от 1 до 100.
 */
// let sum = 0
//
// for (let i = 0; i <= 100; i++) {
//     // if(i% 2!==0) console.log (i)
//     sum += i
//     console.log(sum);
// }
// console.log(sum)

// Задание

// Админ сайта имеет никнейм - 'admin', пароль - 'Admin567Secure';
// Программа должна спрашивать юзернейм и пароль до тех пор, пока юзер
// не введет правильные данные.
// Когда юзер ввел правильные данные, спросить число
// и вывести в консоль все числа от введенного пользователем до 0 (предполагается что число будет
// положительным), кроме 5, 16, 20 (если такие числа будут в диапазоне)

const nickname="admin";
const pass="zalupa"

let userNickname=prompt("nickname");
let password=prompt("pass")

while (userNickname !== nickname) {
    userNickname=prompt("bad nickname")
}
while (password !== pass) {
    password=prompt("bad password")
}
let userNumber=+prompt("enter number")
for (let i=userNumber; i>=0; i--) {
    if (i !==5 && i !==16 && i !==20) {
        console.log(i)
    }
}
// while (typeof num === 'number') {
//     num = +prompt('Number again please')
