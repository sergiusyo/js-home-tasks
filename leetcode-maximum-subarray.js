// найти подмассив с наибольшей суммой и вернуть его сумму
var maxSubArray = function (nums) {
  // инициализируется первым элементом массива
  let maxSum = nums[0];

  // проходит по каждому элементу массива (начиная со второго, т.к. первый уже учтен)
  nums.reduce((currentSum, num) => {
    // currentSum — текущая сумма подмассива, заканчивающегося на текущем элементе
    currentSum = Math.max(num, currentSum + num);
    // обновляем глобальный массив
    maxSum = Math.max(maxSum, currentSum);
    return currentSum;
  });

  return maxSum;
};

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums));
