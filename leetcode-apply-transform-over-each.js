const array = [1, 2, 3];

var map = function (array, fn) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(fn(array[i])); // fn — это функция, переданная как аргумент
  }
  return result;
};

// Передаем функцию x => x + 1
const newArr = map(array, (x) => x + 1);
// console.log(newArr); // 2, 3, 4

// Принимает массив arr и функцию-преобразователь fn
// Проходит по каждому элементу массива
// Применяет fn к каждому элементу (передавая элемент и его индекс)
// Возвращает новый массив с результатами
