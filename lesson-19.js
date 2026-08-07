// 📝 Задача 1: Карточка пользователя
let user = {
  name: "Аня",
  age: 20,
  city: "Москва",

  introduce() {
    // console.log(
    //   `Привет! Меня зовут ${this.name}, мне ${this.age} лет, я из ${this.city}`,
    // );
  },
};

user.introduce();

// 📝 Задача 2: Перебор через for...in
let skills = {
  HTML: 90,
  CSS: 85,
  JS: 95,
};

for (let key in skills) {
  // console.log(key + " : " + skills[key]);
  // или с шаблонными строками:
  // console.log(`${key} : ${obj[key]}`);
}

// 📝 Задача 3: Найди максимум
// let scores = { JS: 95, Python: 80, Go: 70 };
// // console.log(Object.entries(scores).filter(([, v]) => v >= 90))

// let maxKey = "", // название языка с максимальным баллом
//   maxVal = -Infinity; // максимальный балл
// for (let [key, val] of Object.entries(scores)) {
//   // Object.entries(scores) преобразует объект в массив пар [ключ, значение]
//   // Деструктуризация [key, val] сразу извлекает ключ и значение из каждой пары.
//   if (val > maxVal) {
//     // Если текущее значение val больше сохранённого максимума, обновляем:
//     // maxVal — новым рекордным баллом
//     // maxKey — соответствующим языком
//     maxVal = val;
//     maxKey = key;
//   }
// }
// console.log(maxKey + ": " + maxVal);

let scores = { JS: 95, Python: 80, Go: 70 };

let maxKey = "", // название языка с максимальным баллом
  maxVal = -Infinity; // максимальный балл
for (let [key, val] of Object.entries(scores)) {
  if (val > maxVal) {
    maxVal = val; // обновляем рекордный балл
    maxKey = key;
  }
}
// console.log(maxKey + ": " + maxVal);

// 📝 Задача 4: Студент
let student = {
  name: "Аня",
  grades: [4, 5, 3, 5],
  average() {
    const sum = this.grades.reduce((a, b) => a + b, 0);
    return sum / this.grades.length;
  },
};

const { name } = student; // извлекаем свойство name
// console.log(`${name}: средняя оценка ${student.average()}`);
