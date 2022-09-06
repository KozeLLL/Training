// Теоретичне питання
// Поясніть своїми словами, як ви розумієте, як працює прототипне наслідування в Javascript - в джс використовується прототипне наслідування для встроєних об'єктів.
// Тобто, клас (об'єкт) нащадок отримає доступ до метода батьківського класу (об'єкта), якщо метод, що викликається у нащадку не буде знайдено.
// За допомогою підняття (hoisting) він візьме метод у батьківського класу.

// Для чого потрібно викликати super() у конструкторі класу-нащадка? - super() мона викликати в нащадку для того, щоб отримати в ньому батьківський конструктор,
// і користуватись ним або редагувати його до необхідного стану і використовувати його.

// Завдання
// Створити клас Employee, у якому будуть такі характеристики - name (ім'я), age (вік), salary (зарплата).
// Зробіть так, щоб ці характеристики заповнювалися під час створення об'єкта.
// Створіть гетери та сеттери для цих властивостей.
// Створіть клас Programmer, який успадковуватиметься від класу Employee, і який матиме властивість lang (список мов).
// Для класу Programmer перезапишіть гетер для властивості salary. Нехай він повертає властивість salary, помножену на 3.
// Створіть кілька екземплярів об'єкта Programmer, виведіть їх у консоль.

class Employee {
    constructor(name, age, salary) {
        this._name = name
        this._age = age
        this._salary = salary
    }

    set name(value) {
        return this._name = value;
    }

    get name() {
        return this._name;
    }

    set age(value) {
        return this._age = value;
    }

    get age() {
        return this._age;
    }

    set salary(value) {
        return this._salary = value;
    }

    get salary() {
        return this._salary;
    }
}

class Programmer extends Employee {
    constructor(name, age, salary, lang) {
        super(name, age, salary);
        this._lang = lang
    }

    get salary() {
        return this._salary * 3
    }
}

const user1 = new Programmer('Oleg', 18, 4, 'React');
const user2 = new Programmer('Oleh', 19, 5, 'TypeScript');
const user3 = new Programmer('Aleh', 20, 6, 'java');

console.log(user1);
console.log(user2);
console.log(user3);