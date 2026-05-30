// Задачи: вложенные циклы.
// Квадрат из *

// let n = Number(prompt("Число:"));
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= n; j++) {
//     row += "* ";
//   }
//   console.log(row);
// }

// let n = Number(prompt('Введи n:'))
// for (let i = 0; i < n; i++) {
//   console.log('* '.repeat(n).trim())
// }

// ==================================

// Шахматная доска.
// for (let i = 0; i <= 4; i++) {
//     let row = ""
//     for (let j = 0; j <= 4; j++) {
//         let product = String(i * j).padStart(4)
//         row += "# ";
//     }
//     console.log(row)
// }

for (let i = 0; i < 8; i++) {
  let row = "";
  for (let j = 0; j < 8; j++) {
    row += (i + j) % 2 === 0 ? "#" : " ";
  }
  console.log(row);
}
