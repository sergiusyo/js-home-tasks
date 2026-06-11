// Нормализация ввода.
// let name = prompt("Введите имя:");
// name = name.trim();
// let cap = name[0].toUpperCase() + name.slice(1).toLowerCase();
// console.log(`Привет, ${cap}!`);

// Регистронезависимое сравнение.
// const s1 = "hello";
// const s2 = "Hello";
// let result = s1.toLowerCase() === s2.toLowerCase() ? "Одинаковые" : "Разные";
// console.log(result);

// Цензура.
// let s1 = prompt("Введите строку:");
// let s2 = prompt("Введите цензурное слово:");
// let result = s1.replaceAll("***", "you");
// console.log(result);

// Валидация полей.
// let email = prompt("Введите Email:");

// if (
//   email.includes("@") && // email содержит знак @
//   email.lastIndexOf(".") > email.indexOf("@") && // точка должна находиться строго после "@"
//   !email.includes(" ") // email НЕ содержит пробел
// ) {
//   console.log("Верно");
// } else {
//   console.log("Ошибка");
// }

// Слова задом наперёд.
// let s = prompt("Введите строку:");
// console.log(s.split(" ").reverse().join(" "));

// CamelCase.
// let s = prompt("Слова через пробел:");
// let words = s.split(" ");
// let result = words[0].toLowerCase();
// for (let i = 1; i < words.length; i++) {
//   result += words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
// }
// console.log(result);
