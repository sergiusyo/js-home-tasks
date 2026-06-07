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

// Валидация полей.
let email = prompt("Введите Email:");

if (
  email.includes("@") && // email содержит знак @
  email.indexOf(".") > email.indexOf("@") && // точка должна находиться строго после "@"
  !email.includes(" ") // email НЕ содержит пробел
) {
  console.log("Верно");
} else {
  console.log("Ошибка");
}
