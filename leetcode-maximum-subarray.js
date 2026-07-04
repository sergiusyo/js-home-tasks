// найти подмассив с наибольшей суммой и вернуть его сумму
var maxSubArray = function (nums) {
  let maxSum = nums[0];

  nums.reduce((currentSum, num) => {
    currentSum = Math.max(num, currentSum + num);
    maxSum = Math.max(maxSum, currentSum);
    return currentSum;
  });

  return maxSum;
};
