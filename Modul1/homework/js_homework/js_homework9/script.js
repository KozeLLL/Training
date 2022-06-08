// Теоретичні питання
//     Опишіть своїми словами як працює метод forEach.
//     Як очистити масив?
//     Як можна перевірити, що та чи інша змінна є масивом?
//
//     Завдання
//     Реалізувати функцію фільтру масиву за вказаним типом даних. Завдання має бути виконане на чистому Javascript без використання бібліотек типу jQuery або React.
//
//     Технічні вимоги:
//     Написати функцію filterBy(), яка прийматиме 2 аргументи. Перший аргумент - масив, який міститиме будь-які дані, другий аргумент - тип даних.
//     Функція повинна повернути новий масив, який міститиме всі дані, які були передані в аргумент, за винятком тих, тип яких був переданий другим аргументом.
//     Тобто якщо передати масив ['hello', 'world', 23, '23', null], і другим аргументом передати 'string', то функція поверне масив [23, null].
//
const filteredArray = ['hello', 'world', 23, '23', null]

const filterBy = (array, type) => {
    return array.filter((item)=>typeof item !== type)
}

console.log(filterBy(filteredArray, "string"));
//
// const plusOne = (array) => {
//     return array.map((item)=>item + 1)
// }
// console.log(plusOne(filteredArray));
//
// console.log(filteredArray);
// const forEachArray = (array) => {
//     return array.forEach((item) => item + 1)
// }
// console.log(forEachArray(filteredArray))
// console.log(filteredArray);

console.log(filteredArray.includes(23))
