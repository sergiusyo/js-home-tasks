// Напишите функцию, которая преобразует строку в обратном порядке. Входная строка задается в виде массива символов s.
var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // Меняем местами элементы в исходном массиве
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
  // Ничего не возвращаем (void)
};
