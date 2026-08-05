let arr = [0, 10, 20, 30];

var filter = function (arr, fn) {
  const result = []; // Создаем пустой массив для результатов

  // Проходим по каждому элементу массива
  for (const value of arr) {
    // Вызываем fn с тремя аргументами: элемент, индекс, весь массив
    if (fn(value)) {
      result.push(value); // Если fn вернула true, добавляем элемент
    }
  }

  return result; // Возвращаем отфильтрованный массив
};

// Применяем фильтр: оставляем только числа больше 10
const filtered = filter(arr, function (n) {
  return n > 10;
});

// console.log(filtered); // [20, 30]
