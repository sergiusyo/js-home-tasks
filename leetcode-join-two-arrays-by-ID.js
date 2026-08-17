var join = function (arr1, arr2) {
  // Создаем объект для хранения объединенных данных с ключами по id
  const merged = {};

  // Добавляем все элементы из первого массива
  arr1.forEach((item) => {
    merged[item.id] = Object.assign({}, item);
  });

  // Объединяем с элементами из второго массива
  arr2.forEach((item) => {
    if (merged[item.id]) {
      // Если элемент с таким id уже существует, объединяем объекты
      merged[item.id] = Object.assign(merged[item.id], item);
    } else {
      // Если нет, просто копируем
      merged[item.id] = Object.assign({}, item);
    }
  });

  // Преобразуем объект обратно в массив и сортируем по id
  return Object.values(merged).sort((a, b) => a.id - b.id);
};

// const arr1 = [
//   { id: 1, x: 1 },
//   { id: 2, x: 9 },
// ];

// const arr2 = [{ id: 3, x: 5 }];

// const result = join(arr1, arr2);
// console.log(result);

