// Стек
// let stack = [];
// stack.push(prompt("Элемент 1:"));
// stack.push(prompt("Элемент 2:"));
// stack.push(prompt("Элемент 3:"));
// stack.pop();
// console.log(stack);

// Очередь
let q = [1, 2, 3, 4, 5];
console.log(q.shift());
console.log(q.shift());
console.log(q);

// Вставить в середину
// let q = [1, 2, 4, 5];
// q.splice(2, 0, 3);
// console.log(q);

// Топ-3
// let scores = [7, 3, 9, 1, 5, 8, 2, 6, 4, 10];
// scores.sort((a, b) => b - a);
// console.log(scores);
// console.log(scores.slice(0, 3));

// Убрать дубли
// let arr = [1, 2, 2, 3, 3, 3, 4];
// let uniq = [];
// for (let x of arr) if (!uniq.includes(x)) uniq.push(x);
// console.log(uniq);

// Объединить и отсортировать
// let a = prompt("Список 1 (через запятую):").split(",").map(Number);
// let b = prompt("Список 2 (через запятую):").split(",").map(Number);
// let result = a.concat(b).sort((a, b) => a - b);
// console.log(result);
