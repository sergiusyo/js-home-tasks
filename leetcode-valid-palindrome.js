// Сложность - линейная - O(n). O от n — означает, что время выполнения растёт пропорционально длине строки.
// Константная сложность по памяти - 0(1).  память не растёт с увеличением входных данных.
// Всегда используется одинаковый объём памяти.

// var isPalindrome = function (s) {
//   // 1. Обработка пустой строки
//   if (s.length === 0) {
//     return true;
//   }

//   // 2. Очистка строки: удаляем всё, кроме букв и цифр, приводим к нижнему регистру
//   const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, "");

//   // 3. Создание перевернутой версии очищенной строки
//   const reversed = cleaned.split("").reverse().join("");

//   // 4. Сравнение и возврат результата через if/else
//   if (cleaned === reversed) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(isPalindrome("A man a plan a canal Panama")); // true
// console.log(isPalindrome("raceacar")); // false
// console.log(isPalindrome("")); // true

var isPalindrome = function (s) {
  // Вспомогательная функция для проверки буквенно-цифровых символов
  function isAlphanumeric(char) {
    return /[a-zA-Z0-9]/.test(char);
  }

  if (s.length === 0) return true;

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // Пропускаем небуквенно-цифровые символы слева
    while (left < right && !isAlphanumeric(s[left])) {
      left++;
    }
    // Пропускаем небуквенно-цифровые символы справа
    while (left < right && !isAlphanumeric(s[right])) {
      right--;
    }

    // Сравниваем символы (приводим к нижнему регистру)
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};

// console.log(isPalindrome("A man a plan a canal Panama")); // true
// console.log(isPalindrome("raceacar")); // false
// console.log(isPalindrome("")); // true

// Трассировка Valid Palindrome.
// Строка: "racecar"

// r  a  c  e  c  a  r
// ↑                 ↑ // стрелками отмечены индексы 0 и 6
// 0  1  2  3  4  5  6

// Шаг	left	right	s[left]	s[right]	Совпадают?	Действие
// 1	0	    6	    r	    r	            ✓	    left=1, right=5
// 2	1	    5	    a	    a	            ✓	    left=2, right=4
// 3	2	    4	    c	    c	            ✓	    left=3, right=3
// 4	3	    3	           left == right → выход → return True ✓
