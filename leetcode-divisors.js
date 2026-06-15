// Верните значение true, если n имеет ровно три положительных делителя.
// В противном случае верните значение false.
function isThree(n) {
  if (n < 4) return false; // наименьшее число с тремя делителями это 4

  function isPrime(num) {
    if (num < 2) return false; // 0 и 1 не простые
    if (num === 2) return true; // 2 - единственное простое число
    if (num % 2 === 0) return false; // остальные четные числа не простые

    // Проверяем только нечетные делители до sqrt(num)
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      // Шаг i += 2 пропускает четные числа (кроме 2, который уже проверен)
      if (num % i === 0) return false;
    }
    return true;
  }

  const sqrtN = Math.sqrt(n); // проверяет, является ли n полным квадратом
  // Math.sqrt(4) = 2, Math.floor(2) = 2 → равны
  // Math.sqrt(8) ≈ 2.828, Math.floor(2.828) = 2 → не равны
  return sqrtN === Math.floor(sqrtN) && isPrime(sqrtN); // isPrime(sqrtN) — проверяет, является ли корень простым числом
}

// console.log(isThree(4)); // true
// console.log(isThree(2)); // false

// Дано целое число num. Вернуть true, если это совершенное число (сумма собственных делителей = num).
function isPerfectNumber(num) {
    if (num <= 1) return false;
    
    let sumOfDivisors = 0;
    
    // Ищем собственные делители (до num / 2)
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sumOfDivisors += i;
        }
    }
    
    return sumOfDivisors === num;
}

// Проверка
// console.log(isPerfectNumber(28));   // true

