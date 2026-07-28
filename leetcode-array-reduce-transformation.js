var reduce = function (nums, fn, init) {
  let result = init; // Начинаем с начального значения

  for (let i = 0; i < nums.length; i++) {
    result = fn(result, nums[i]); // Применяем fn к аккумулятору и текущему элементу
  }

  return result; // Возвращаем финальный результат
};
