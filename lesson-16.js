// Квадраты
// let arr = [1, 2, 3, 4, 5]
// console.log(arr.map(x => x * x))

// Только длинные
// let words = ["hi", "hello", "js", "javascript", "py"];
// console.log(words.filter((w) => w.length > 3));

// Сумма reduce
// let arr = [10, 20, 30, 40, 50];
// console.log(arr.reduce((acc, x) => acc + x, 0));

// Отрицательные в плюс
// let arr = [-3, -1, 2, -4, 5];
// console.log(arr.map(Math.abs))

// Средний балл
// let scores = [72, 85, 91, 60, 78];
// let passed = scores
//   .map((scores) => (scores >= 70 ? "Зачет" : "Незачет"))
//   .filter((scores) => scores === "Зачет");
// console.log("Зачетов: " + passed.length);

// Конвейер
let nums = prompt("Число"); // 1, -2, 3, -4, 5
let result = nums
  .split(",")
  .map(Number)
  .filter((x) => x > 0)
  .map((x) => x * x)
  .reduce((acc, x) => acc + x, 0);

console.log("Сумма квадратов: " + result);
