const arr = [1, 2, 3];

var map = function (arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i)); // fn — это функция, переданная как аргумент
  }
  return result;
};

// Передаем функцию x => x + 1
const newArr = map(arr, (x) => x + 1);
console.log(newArr); // 2, 3, 4

// Принимает массив arr и функцию-преобразователь fn
// Проходит по каждому элементу массива
// Применяет fn к каждому элементу (передавая элемент и его индекс)
// Возвращает новый массив с результатами
