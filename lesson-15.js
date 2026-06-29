// Стек
// let stack = [];
// stack.push(prompt("Элемент 1:"));
// stack.push(prompt("Элемент 2:"));
// stack.push(prompt("Элемент 3:"));
// stack.pop();
// console.log(stack);

// Очередь
// let q = [1, 2, 3, 4, 5];
// console.log(q.shift());
// console.log(q.shift());
// console.log(q);

// Вставить в середину
let q = [1, 2, 4, 5];
q.splice(2, 0, 3);
// console.log(q);

// Топ-3
let scores = [7, 3, 9, 1, 5, 8, 2, 6, 4, 10];
scores.sort((a, b) => b - a);
// console.log(scores);
// console.log(scores.slice(0, 3));
