// Написать функцию reduce, сводящую (редуцирующую) массив к одному значению

var reduce = function (nums, fn, init) {
  let result = init; // Начинаем с начального значения init (аккумулятор)

  for (let i = 0; i < nums.length; i++) {
    // проходим по каждому элементу массива
    result = fn(result, nums[i]); // Применяем fn к аккумулятору и текущему элементу
    // обновляем аккумулятор результатом
  }

  return result; // Возвращаем финальный результат
};

// const numbers = [1, 2, 3, 4];
// const sum = reduce(
//   numbers,
//   function (acc, curr) {
//     return acc + curr; // Возвращает новое значение аккумулятора
//   },
//   0, // Начальное значение аккумулятора
// );

// console.log(sum); // 10
