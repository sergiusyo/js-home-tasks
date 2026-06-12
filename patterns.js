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

// Пример.
const reverseString = (str) => {
  let arr = [...str]; // преобразуем строку в массив
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // Обмен значений через деструктуризацию
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr.join("");
};

// Проверка
console.log(reverseString("hello")); // "olleh

// Меняем местами, двигаем оба. Результат: olleh
