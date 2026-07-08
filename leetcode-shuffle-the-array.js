// Верните массив в виде [x1, y1, x2, y2,..., xn, yn]
var shuffle = function (nums2, n) {
  // [2,5,1,3,4,7], n = 3

  // создаем массив из 6 элементов (2 * n)
  // функция-маппер принимает 2 аргумента: _ — значение текущего элемента (undefined) и i - индекс (от 0 до 5)
  // Создаем массив из 6 элементов (2 * n)
  Array.from({ length: 2 * n }, (_, i) => {
    // Для каждого индекса i (0, 1, 2, 3, 4, 5)

    if (i % 2 === 0) {
      // Четный индекс
      return nums2[i / 2]; // Берем из первой половины
    } else {
      // Нечетный индекс
      return nums2[n + (i - 1) / 2]; // Берем из второй половины
    }
  });
};

const nums2 = [2, 5, 1, 3, 4, 7];
const n = 3;

console.log(shuffle(nums2, n)); // 2, 3, 5, 4, 1, 7

// var shuffle = function (nums2, n) {
//   let result = [];
//   for (let i = 0; i < n; i++) {
//     result.push(nums2[i]); // берем из первой половины
//     result.push(nums2[i + n]); // берем из второй половины
//   }
//   return result;
// };

// const nums2 = [2, 5, 1, 3, 4, 7];
// const n = 3;

// console.log(shuffle(nums2, n)); // 2, 3, 5, 4, 1, 7
