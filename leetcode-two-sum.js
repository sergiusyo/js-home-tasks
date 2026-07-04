// Найти два числа в отсортированном массиве numbers, которые в сумме дают target.
// var twoSum = function (nums, target) {
//   // итерируется каждый элемент массива
//   for (let i = 0; i < nums.length; i++) {
//     // j - Индекс второго элемента. Проверяются все последующие элементы
//     for (let j = i + 1; j < nums.length; j++) {
//       // проверяется, равна ли сумма элементов с индексами i и j значению target
//       if (nums[i] + nums[j] === target) {
//         return [i, j]; // Возвращаем индексы найденной пары
//       }
//     }
//   }
//   return null;
// };

// Входные данные
// const nums = [2, 7, 11, 15];
// const target = 9;

// const result = twoSum(nums, target);
// console.log(result);
