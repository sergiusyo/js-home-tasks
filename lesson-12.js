// Задачи: индексация строк. В столбик.
// const s = prompt("Введите строку:");
// for (let i = 0; i < s.length; i++) {
//   console.log(`${i + 1}: ${s[i]}`);
// }

// Сколько раз?
// const s = prompt("Введите строку:");
// const target = prompt("Символ:");
// let count = 0;
// for (let char of target) {
//   if (char === "a") {
//     count++;
//   }
// }
// console.log(count);

// Цифра 1.
// const s = prompt("Введите строку:");
// for (const char of s) {
//   if (char >= "0" && char <= "9") {
//     console.log(char);
//   }
// }

// Делаем срезы.
// const s = prompt("Введите строку:");
// console.log(s.slice(0, 3), s.slice(-3), s.slice(1, -1));

// Палиндром.
const s = prompt("Введите строку:");
const rev = s.split('').reverse().join("");
console.log(s === rev ? "YES" : "NO");
