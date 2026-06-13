// Скользящее окно. Оба указателя идут вправо. Окно расширяется и сужается.

// ⱥ  b  c  d  e
//    ↑        ↑
//    L        R

// Подстроки, подмассивы.

// Пример.
// Максимальная сумма подмассива длины k.

function maxSum(nums, k) { // количествр элементов подмножества
  let windowSum = 0; // хранит теку сумму элементов в "окне" (подмножестве) длиной k
  for (let i = 0; i < k; i++) {
    windowSum += nums[i]; 
  }

  let result = windowSum;

  for (let i = k; i < nums.length; i++) {

    windowSum = windowSum + nums[i] - nums[i - k];

    result = Math.max(result, windowSum);
  }

  return result;
}

