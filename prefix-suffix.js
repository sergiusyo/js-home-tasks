// Паттерн 3: Префикс / Суффикс. Удаляем блоки с двух концов, пока крайние символы совпадают.
function minLengthAfterDeletingPrefixSuffix(s) {
  let a = 0; // начало строки
  let b = s.length - 1; // последний индекс

  while (a < b && s[a] === s[b]) {
    // цикл выполняется до тех пор, пока указатели не пересеклись. Как
    // только символы на концах различаются, процесс удаления прекращается.
    const x = s[a]; // сохраняется символ x, находящийся в этот момент на обоих концах окна.
    // Далее происходит «схлопывание» окна с двух сторон:
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
