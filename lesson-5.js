// Задачи: else...if

// Среднее из трех
// const a = parseInt(prompt("a:"));
// const b = parseInt(prompt("b:"));
// const c = parseInt(prompt("c:"));

// a = 2  // a = 2
// b = 1
// c = 3

// (Не получается 6, спросить!)
// a = 6  // a = 6
// b = 8
// c = 4

// if ((a >= b && a <= c) || (a >= c && a <= b)) {
//   console.log(a);
// } else if ((b >= a && b <= c) || (b >= c && b <= a)) {
//   console.log(b);
// } else {
//   console.log(c);
// }

// Церемония взвешивания
// const weight = parseInt(prompt("Вес:"));

// if (weight >= 55 && weight <= 60) {
//   console.log("Легкий вес");
// } else if (weight >= 61 && weight <= 64) {
//   console.log("Первый полусредний");
// } else if (weight >= 65 && weight <= 69) {
//   console.log("Полусредний вес");
// } else {
//   console.log("Тяжелый вес");
// }

// Цветовой микшер
// let color1 = prompt("Цвет 1:");
// let color2 = prompt("Цвет 2:");

// let yellow = "Фиолетовый";
// let green = "Зеленый";
// let orange = "Оранжевый";

// if (
//   (color1 === "Красный" && color2 === "Синий") ||
//   (color1 === "Синий" && color2 === "Красный")
// ) {
//   console.log(yellow);
// } else if (
//   (color1 === "Желтый" && color2 === "Синий") ||
//   (color1 === "Синий" && color2 === "Желтый")
// ) {
//   console.log(green);
// } else if (
//   (color1 === "Красный" && color2 === "Желтый") ||
//   (color1 === "Желтый" && color2 === "Красный")
// )
//   console.log(orange);
// {
//   console.log("Ошибка");
// }

// Сезон по месяцу
// const month = parseInt(prompt("Месяц (1-12):"));

// switch (month) {
//   case 12:
//   case 1:
//   case 2:
//     console.log("Зима"); // уточнить!
//     break;
//   case 3:
//   case 4:
//   case 5:
//     console.log("Весна");
//     break;
//   case 6:
//   case 7:
//   case 8:
//     console.log("Лето");
//     break;
//   case 9:
//   case 10:
//   case 11:
//     console.log("Осень");
//     break;
//   default:
//     console.log("Ошибка");
// }

// Совпадающие числа
// const a = parseInt(prompt("Число a:"));
// const b = parseInt(prompt("Число b:"));
// const c = parseInt(prompt("Число c:"));

// 5 5 5 → 3
// 5 5 7 → 2
// 1 2 3 → 0

// if (a === b && b === c) {
//   console.log(3);
// } else if (a === b || b === c || a === c) {
//   console.log(2);
// } else {
//   console.log(0);
// }
