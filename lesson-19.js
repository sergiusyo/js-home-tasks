// 📝 Задача 1: Карточка пользователя
let user = {
  name: "Аня",
  age: 20,
  city: "Москва",

  introduce() {
    console.log(
      `Привет! Меня зовут ${this.name}, мне ${this.age} лет, я из ${this.city}`,
    );
  },
};

// 📝 Задача 2: Перебор через for...in
let obj = {
  HTML: 90,
  CSS: 85,
  JS: 95,
};

for (let key in obj) {
  //   console.log(key + " : " + obj[key]);
  // или с шаблонными строками:
  // console.log(`${key} : ${obj[key]}`);
}
