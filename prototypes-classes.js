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

// создание экземпляра класса Student
const ivan = new Student("Иван", 18, "Математика");
console.log(ivan.introduce()); // вызывает метод introduce() у созданного объекта

// Зоопарк
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} издает звук`;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
    this.name = name;
  }
  speak() {
    return `"${this.name}: Гав!"`;
  }
}

const rex = new Dog("Рекс");
console.log(rex.speak());

class Cat extends Animal {
  constructor(name) {
    super(name);
    this.name = name;
  }
  speak() {
    return `"${this.name}: Мяу!"`;
  }
}

const cat = new Cat("Мурка");
console.log(cat.speak());

class Bird extends Animal {
  constructor(name) {
    super(name);
    this.name = name;
  }
  speak() {
    return `"${this.name}: Чирик!"`;
  }
}

const bird = new Bird("Кеша");
console.log(bird.speak());
