// Найти два числа в отсортированном массиве numbers, которые в сумме дают target. 
var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    // Вычисляется сумма чисел под указателями
    const currentSum = numbers[left] + numbers[right];

    if (currentSum === target) {
      return [left + 1, right + 1]; // +1 потому что задача требует индексы с 1
    } else if (currentSum < target) {
      left++;
    } else {
      right--;
    }
  }
};
