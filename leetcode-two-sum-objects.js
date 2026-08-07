// Найти в массиве nums два числа, которые в сумме дают target, и вернуть их индексы
var twoSum = function (nums, target) {
  const map = {}; // хранит уже просмотренные числа и их индексы

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i]; // число на текущей позиции
    const complement = target - currentNum; // число, которое нужно найти

    if (map.hasOwnProperty(complement)) {
      return [map[complement], i];
    }
  }
};
