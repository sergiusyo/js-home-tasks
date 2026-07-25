var filter = function (arr, fn) {
  const result = [];
  let index = 0;
  // value получает само значение элемента, а не его индекс
  for (const value of arr) {
    if (fn(value, index, arr)) {
      result.push(value);
    }
    index++;
  }
  return result;
};
