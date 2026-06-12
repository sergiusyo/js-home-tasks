// Встречный ход. Left стартует с начала, Right — с конца. Сходятся к центру.
// Палиндром, two sum, reverse

// a b c b a
// ↑       ↑
// L       R

// Шаблон кода:

// let left = 0;
// let right = arr.length - 1;

// while (left < right) {
//   if (условие) {
//     // действие
//   } else if (другое_условие) {
//     left++;
//   } else {
//     right--;
//   }
// }

// let arr = [54, 5, 6, 7];
// let n = arr.length;
// let left = 0;
// let right = n - 1;

// while (left < right) {
//   [arr[left], arr[right]] = [arr[right], arr[left]];
//   left++;
//   right--;
// }
// console.log(left, right);

// Перевернутая строка (палиндром через объявление функции).
function reverseString(str) {
  const arr = str.split("");
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr.join("");
}

console.log(reverseString("hello"));

// Пример.
// const reverseString = (str) => {
//   let arr = [...str]; // преобразуем строку в массив
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     // Обмен значений через деструктуризацию
//     [arr[left], arr[right]] = [arr[right], arr[left]];
//     left++;
//     right--;
//   }

//   return arr.join("");
// };

// // Проверка
// console.log(reverseString("hello")); // "olleh

// Меняем местами, двигаем оба. Результат: olleh
