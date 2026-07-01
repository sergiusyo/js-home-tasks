// 📝 Задача 1: Список покупок
let buyList = ["молоко", "яйца", "колбаса", "сыр", "хлеб"];
console.log(buyList);
console.log(buyList[0]);
console.log(buyList[buyList.length - 1]);

// 📝 Задача 2: Array.from строки
let str = "Javascript";
console.log(Array.from(str)); // ['J', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']
console.log(Array.from(str).length); // 10

// let str = "Javascript";
// console.log(str.split('')); // ['J', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']
// console.log(str.split('').length); // 10

// let str = "Javascript";
// let arr = [];

// перебираем каждый символ строки и добавляем в массив
// for (const char of str) {
//   arr.push(char)
// }

// console.log(arr); 
// console.log(arr.length); 

// 📝 Задача 3: Очередь
let firstName = ["Аня", "Боря", "Вася"];
firstName.push("Галя");
firstName.shift();
console.log(firstName);

// 📝 Задача 4: Сумма массива
let nums = [5, 10, 15, 20, 25];
let sum = 0;

for (const n of nums) {
  sum += n;
}

console.log(sum);
