// Цикл от 1 до n, внутри проверка % 3, % 5, % 7. Нужно аккуратно не посчитать одно число дважды через ||.
var sumOfMultiples = function (n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    // Новое условие: число кратно 3 или 5 ИЛИ не делится на 7
    if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
      sum += i;
    }
  }
  return sum;
};

// console.log(sumOfMultiples(7)); // 21
// console.log(sumOfMultiples(10));
// console.log(sumOfMultiples(9));
