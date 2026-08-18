// Класс Person
class Person {
  // объявляем класс с аргументами
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // объявляем функцию, привязанную к классу
  introduce() {
    return `Меня зовут ${this.name}, мне ${this.age} лет`;
  }
}

// создание экземпляра (новый объект на основе класса Person)
const girl = new Person("Анна", 20); // cсылка на этот готовый объект сохраняется в константу girl
console.log(girl.introduce()); // внутри метода introduce() this.name равен "Анна", а this.age равен 20

// Класс Student
// объявление дочернего класса
class Student extends Person {
  constructor(name, age, faculty) {
    // вызов super(name, age) передает первые два аргумента конструктору родительского класса (Person)
    super(name, age);
    this.faculty = faculty;
  }
  introduce() {
    const base = super.introduce();
    return `${base}. Факультет: ${this.faculty}`; // берет результат от родителя и дополняет его информацией о факультете
  }
}

const ivan = new Student("Иван", 18, "Математика");
console.log(ivan.introduce());
// Меня зовут Иван, мне 18 лет. Факультет: Математика
