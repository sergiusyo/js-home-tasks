Array.prototype.groupBy = function (fn) {
  const result = {}; // Создаем пустой объект для хранения групп

  // Проходим по каждому элементу массива
  for (let i = 0; i < this.length; i++) {
    const item = this[i];

    // Получаем ключ для текущего элемента
    const key = fn(item, i, this);

    // Если группы с таким ключом еще нет, создаем ее
    if (!result[key]) {
      result[key] = [];
    }

    // Добавляем элемент в соответствующую группу
    result[key].push(item);
  }

  return result;
};
