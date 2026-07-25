// Перепиши функцию
// function add(a, b) {
//   return a + b; // обычная функция
// }

const add2 = (a, b) => {
  return a + b;
};

// console.log(add(3, 7)); // 10
// console.log(add2(3, 7)); // 10

// isPositive
const isPositive = (n) => (n > 0 ? true : false);

// console.log(isPositive(5));
// console.log(isPositive(-3));
// console.log(isPositive(0));

// Числа в пиксели
const sizes = [10, 20, 50, 100];
const pixels = sizes.map((n) => `${n}px`);
// console.log(pixels);

// makeGreeter
const makeGreeter = (greeting) => (name) => `${greeting}, ${name}!`;

// const hi = makeGreeter("Привет");
// console.log(hi("Катя")); // Привет, Катя!
// console.log(hi("Артём")); // Привет, Артём!
