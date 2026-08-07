// Найти в массиве nums два числа, которые в сумме дают target, и вернуть их индексы
var twoSum = function (nums, target) {
  const map = {}; // хранит уже просмотренные числа и их индексы

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i]; // число на текущей позиции
    const complement = target - currentNum; // число, которое нужно найти

    if (map.hasOwnProperty(complement)) {
      // проверяется наличие ключа complement в map
      return [map[complement], i]; // возвращаем индекс сохраненного числа и сам индекс
    }

    map[currentNum] = i; // Если дополнение не найдено — запоминаем текущее число и его индекс
  }
  return null;
};

console.log(twoSum([2, 7, 11, 15], 9));
