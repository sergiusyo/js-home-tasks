// Один проход, на каждом шаге прибавляешь текущий элемент к предыдущей сумме. Чище не бывает.

var runningSum = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1]; // На каждом шаге к текущему элементу прибавляется значение предыдущего.
  }
  return nums;
};

console.log(runningSum([1, 2, 3, 4]));
