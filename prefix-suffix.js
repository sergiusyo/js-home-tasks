// Паттерн 3: Префикс / Суффикс. Удаляем блоки с двух концов, пока крайние символы совпадают.
function minLengthAfterDeletingPrefixSuffix(s) {
  let a = 0;
  let b = s.length - 1;

  while (a < b && s[a] === s[b]) {
    const x = s[a];
    // сдвигаем a через весь блок x
    while (a <= b && s[a] === x) {
      a++;
    }
    // сдвигаем b через весь блок x
    while (a <= b && s[b] === x) {
      b--;
    }
  }

  return Math.max(0, b - a + 1);
}

console.log(minLengthAfterDeletingPrefixSuffix("aabbaa")); // 0
console.log(minLengthAfterDeletingPrefixSuffix("abccba")); // 0
console.log(minLengthAfterDeletingPrefixSuffix("abcba")); // 1
console.log(minLengthAfterDeletingPrefixSuffix("abxba")); // 1 (остается 'x')

// Визуализация строки "abxba":

// a  b  x  b  a
// ↑           ↑
// L           R

// ⱥ  b  x  b  ⱥ
//    ↑     ↑         // s[L]='a' == s[R]='a' → удаляем блоки 'a'
//    L     R

// ⱥ  ƀ  x  ƀ  ⱥ      // Остаток: "x", длина = 1
