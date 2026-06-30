// вернуть true, если в массиве nums появляется дублирующееся значение хотя бы один раз, или верните false,
// если элемент встречается только один раз

var containsDuplicate = function (nums) {
  // Перебираем каждый элемент в массиве
  for (let i = 0; i < nums.length; i++) {
    // Проверяем, является ли текущий индекс первым вхождением элемента
    // Если нет, значит, мы нашли дубликат
    if (i !== nums.indexOf(nums[i])) {
      return true; // Дубликат найден
    }
  }
  // Если цикл завершился, дубликатов не обнаружено
  return false;
};

console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
