// Задан массив nums. Текущая сумма массива определяется как
// runningSum[i] = sum(nums[0]...nums[i]). Вернуть текущую сумму nums.

var runningSum = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1]; // На каждом шаге к текущему элементу прибавляется значение предыдущего.
  }
  return nums;
};

console.log(runningSum([1, 2, 3, 4]));
