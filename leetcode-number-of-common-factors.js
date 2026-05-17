// Цикл от 1 до min(a, b), проверяешь делимость сразу на оба числа. Прямая задача на паттерн делителей из урока.
var commonFactors = function (a = 12, b = 6) {
  let min = 0;
  for (let i = 1; i < min; i++) {
    if (a % 3 === 0 && b % 3 === 0) {
      console.log(i);
    }
    return min;
  }
};

console.log(commonFactors());
