// Верните массив в виде [x1, y1, x2, y2,..., xn, yn]
var shuffle = function (nums, n) {
  return Array.from({ length: 2 * n }, (_, i) =>
    i % 2 === 0 ? nums[i / 2] : nums[n + (i - 1) / 2],
  );
};
