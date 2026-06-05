// Задачи: индексация строк. В столбик.
// const s = prompt("Введите строку: ");
// for (let i = 0; i < s.length; i++) {
//   console.log(`${i + 1}: ${s[i]}`);
// }

// Сколько раз?
// const s = prompt("Строка:");
// const target = prompt("Символ:");
// let count = 0;
// for (let char of target) {
//   if (char === "a") {
//     count++;
//   }
// }
// console.log(count);

// Цифра 1.
const s = prompt("Строка:");
for (const char of s) {
  if (char >= "0" && char <= "9") {
    console.log(char);
  }
}
