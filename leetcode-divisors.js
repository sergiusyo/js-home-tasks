// Three divisors.
// Верните значение true, если n имеет ровно три положительных делителя.
// В противном случае верните значение false.
//
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

// // const sqrtN = Math.sqrt(n); // проверяет, является ли n полным квадратом
// // Math.sqrt(4) = 2, Math.floor(2) = 2 //→ равны
// // Math.sqrt(8) ≈ 2.828, Math.floor(2.828) = 2 //→ не равны
// // return sqrtN === Math.floor(sqrtN) && isPrime(sqrtN); // isPrime(sqrtN) — проверяет, является ли корень простым числом
// }

var isThree = function (n) {
  if (n === 1) {
    return false;
  }

  if (!Number.isInteger(Math.sqrt(n))) {
    // число, НЕ являющееся квадратным корнем числа
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0 && i != Math.sqrt(n)) {
      // если i делит исходное число n без остатка и
      // при этом i не равно квадратному корню, - мы нашли нетривиальный делитель.
      return false;
    }
  }

  return true;
};

// console.log(isThree(4)); // true
// console.log(isThree(2)); // false
// console.log(isThree(9)); // true
// console.log(isThree(16)); // false

// Perfect Number.

function checkPerfectNumber(num) {
  if (num < 2) {
    return false;
  }

  let sumOfDivisors = 1; // сумма собственных делителей. Начинается с 1,
  // т.к. это единственный универсальный делитель

  const sqrtN = Math.floor(Math.sqrt(num)); // оптимизация с квадратным корнем

  for (let i = 2; i <= sqrtN; i++) {
    if (num % i === 0) {
      sumOfDivisors += i; // добавляем найденный делитель
      // находим парный делитель
      const pairedDivisor = num / i;

      // добавляем парный делитель, если он не является квадратным корнем i
      // или самым числом num  --> (if (например, 16 !== 4 && 7 !== 28))
      if (pairedDivisor !== i && pairedDivisor !== num) {
        sumOfDivisors += pairedDivisor;
      }
    }
  }
  return sumOfDivisors === num;
}

// console.log(checkPerfectNumber(28)); // true
// console.log(checkPerfectNumber(7)); // false
// console.log(checkPerfectNumber(16)); // false

// Count the Digits That Divide a Number.
// Дано целое число num. Вернуть количество цифр числа num, на которые num делится без остатка.
var countDigits = function (num) {
  // Если число 0, возвращаем 0, так как на 0 делить нельзя
  if (num === 0) {
    return 0;
  }

  // Берём абсолютное значение для корректной работы с отрицательными числами
  const absNum = Math.abs(num);

  // Преобразуем число в строку, разбиваем на символы и преобразуем их в числа
  const digits = String(absNum)
    .split("")
    .map((digit) => parseInt(digit, 10));

  // Подсчитываем количество цифр, на которые число делится без остатка
  let count = 0;
  for (const digit of digits) {
    if (digit !== 0 && absNum % digit === 0) {
      count++;
    }
  }

  return count;
};

// console.log(countDigits(7)); // 1
// console.log(countDigits(121)); // 2
// console.log(countDigits(1248)); // 4

// Дано целое num. Найти два числа, произведение которых равно num+1 или num+2, и у которых наименьшая разность.
var closestDivisors = function (num) {
  // Находит два множителя числа n, которые наиболее близки друг к другу
  const findClosestFactors = (n) => {
    // 9
    for (let i = Math.floor(Math.sqrt(n)); i > 0; i--) {
      if (n % i === 0) {
        return [i, n / i]; // [3, 9 / 3], т.е. [3, 3])
      }
    }
    return [1, n]; // Базовый случай для простых чисел
  };

  const target1 = num + 1; // 8 + 1 = 9
  const target2 = num + 2; // 8 + 2 = 10

  // Выбираем пару с минимальной разницей
  const pair1 = findClosestFactors(target1);
  const pair2 = findClosestFactors(target2);

  // Сравниваем абсолютную разность элементов в парах. Math.abs() игнорирует минус
  const diff1 = Math.abs(pair1[0] - pair1[1]); // разница diff1 = |3 - 3| = 0
  const diff2 = Math.abs(pair2[0] - pair2[1]); // разница diff2 = |2 - 5| = 3

  return diff1 <= diff2 ? pair1 : pair2; // 0 <= 3 return pair1
};

console.log(closestDivisors(8)); // [3, 3]

// Four Divisors.
// Дан массив nums. Для каждого числа с ровно 4 делителями найти сумму его делителей. Вернуть общую сумму.
var sumFourDivisors = function (nums) {
  let totalSum = 0;

  // Перебираем каждое число в массиве
  for (const num of nums) {
    let currentSum = 0;
    let count = 0;

    // Ищем делители до корня из числа включительно
    const sqrtN = Math.floor(Math.sqrt(num));

    for (let i = 1; i <= sqrtN; i++) {
      if (num % i === 0) {
        const divisorPair = num / i;

        // Если делитель совпадает со своей парой (полный квадрат)
        if (i === divisorPair) {
          currentSum += i;
          count += 1;
        } else {
          // если делители разные, счетчик увеличивается на 2
          currentSum += i + divisorPair;
          count += 2;
        }
      }
    }

    // Проверяем, нашли ли мы ровно 4 делителя
    if (count === 4) {
      totalSum += currentSum;
    }
  }

  return totalSum;
};

// console.log(sumFourDivisors([21, 4, 7]));
