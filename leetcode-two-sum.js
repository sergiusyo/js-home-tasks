// // Найти два числа в отсортированном массиве numbers, которые в сумме дают target.
// var twoSum = function (nums, target) {
//   // итерируется каждый элемент массива
//   for (let i = 0; i < nums.length; i++) {
//     // j - Индекс второго элемента. Проверяются все последующие элементы
//     for (let j = i + 1; j < nums.length; j++) {
//       // проверяется, равна ли сумма элементов с индексами i и j значению target
//       if (nums[i] + nums[j] === target) {
//         return [i, j]; // Возвращаем индексы найденной пары == true. Функция возвращает [0, 1]
//       }
//     }
//   }
//   return null;
// };

// // Входные данные
// const nums = [2, 7, 11, 15];
// const target = 9;

// const result = twoSum(nums, target);
// console.log(result);

// // Решение с использованием хэш-таблицы
// var twoSum = function (nums1, target1) {
//   const hashMap = {}; // Храним число -> индекс

//   for (let i = 0; i < nums1.length; i++) {
//     const complement = target1 - nums1[i]; // Число, которое нужно найти

//     // Проверяем, есть ли нужное число в хэш-таблице
//     if (hashMap[complement] !== undefined) {
//       return [hashMap[complement], i];
//     }

//     // Сохраняем текущее число и его индекс
//     hashMap[nums1[i]] = i;
//   }

//   return null; // Если пара не найдена
// };

// const nums1 = [2, 7, 11, 15];
// const target1 = 9;
// const result1 = twoSum(nums1, target1);
// console.log(result1); // [0, 1]
