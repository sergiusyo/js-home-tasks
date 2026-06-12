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
