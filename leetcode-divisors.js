// Верните значение true, если n имеет ровно три положительных делителя.
// В противном случае верните значение false.
// function isThree(n) {
//   if (n < 4) return false; // наименьшее число с тремя делителями это 4

//   function isPrime(num) {
//     if (num < 2) return false; // 0 и 1 не простые
//     if (num === 2) return true; // 2 - единственное простое число
//     if (num % 2 === 0) return false; // остальные четные числа не простые

//     // Проверяем только нечетные делители до sqrt(num)
//     for (let d = 3; d <= Math.sqrt(num); d += 2) {
//       // Шаг d += 2 пропускает четные числа (кроме 2, который уже проверен)
//       if (num % d === 0) return false;
//     }
//     return true;
//   }

  // const sqrtN = Math.sqrt(n); // проверяет, является ли n полным квадратом
  // Math.sqrt(4) = 2, Math.floor(2) = 2 //→ равны
  // Math.sqrt(8) ≈ 2.828, Math.floor(2.828) = 2 //→ не равны
  // return sqrtN === Math.floor(sqrtN) && isPrime(sqrtN); // isPrime(sqrtN) — проверяет, является ли корень простым числом
// }

// console.log(isThree(4)); // true
// console.log(isThree(2)); // false

// Дано целое число num. Вернуть true, если это совершенное число (сумма собственных делителей = num).
// function checkPerfectNumber(num) {
//   if (num <= 1) return false; // 0, 1 и отриц. числа не м/б совершенными

//   let sumOfDivisors = 0; // накопитель суммы всех собственных делителей

//   // Ищем собственные делители (до num / 2)
//   for (let i = 1; i <= num / 2; i++) {
//     // num / 2 - у числа не м/б СД больше его половины (кроме его самого)
//     // для 28 это 14 (28 / 2)
//     if (num % i === 0) {
//       // проверяет, делится ли num на i без остатка. Если да, то i
//       // добавляется к сумме делителей
//       sumOfDivisors += i;
//     }
//   }

//   return sumOfDivisors === num; // если сумма СД равна исходному числу - возвращает true
//   // иначе false
// }

// console.log(checkPerfectNumber(28));   // true
