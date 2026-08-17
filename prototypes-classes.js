// Класс Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `Меня зовут ${this.name}, мне ${this.age} лет`;
  }
}

const girl = new Person("Анна", 20);
console.log(girl.introduce());

// Класс Student
class Student extends Person {
  constructor(name, age, faculty) {
    super(name, age)
    this.faculty = faculty
  }
  introduce() {
    const base = super.introduce()
    return `${base}. Факультет: ${this.faculty}`
  }
}

const ivan = new Student('Иван', 18, 'Математика')
console.log(ivan.introduce())
// Меня зовут Иван, мне 18 лет. Факультет: Математика
