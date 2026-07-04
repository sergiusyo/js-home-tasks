// найти подмассив с наибольшей суммой и вернуть его сумму
var maxSubArray = function (n) {
  let maxSum = n[0];

  n.reduce((currentSum, num) => {
    currentSum = Math.max(num, currentSum + num);
    maxSum = Math.max(maxSum, currentSum);
    return currentSum;
  });

  return maxSum;
};
