// Класс Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    return `Меня зовут ${this.name}, мне ${this.age} лет`;
  }
}

const girl = new Person("Анна", 20);
console.log(girl.speak());
