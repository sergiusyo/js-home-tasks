// Определить знак произведение всех чисел в массиве
var arraySign = function (nums) {
  // nums - массив чисел
  let mult = 1; // инициализируется значением 1 (почему 1) ?
  nums.forEach((item, index) => {
    // forEach проходит по каждому элементу массива
    mult *= item; // item - текущий элемент массива. То же самое: mult = mult * item
  });

  switch (true) {
    case mult > 0:
      return 1;
    case mult < 0:
      return -1;
    default:
      return 0;
  }
};

console.log(arraySign([-1, 1, -1, 1, -1]));
