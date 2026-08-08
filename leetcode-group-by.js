Array.prototype.groupBy = function (fn) {
  const result = {}; // Создаем пустой объект для хранения групп

  // Проходим по каждому элементу массива
  for (let i = 0; i < this.length; i++) {
    const item = this[i];

    // Получаем ключ для текущего элемента. Возвращаем значение поля id
    const key = fn(item, i, this);

    // Если свойство с таким ключом не существует, оно инициализируется пустым массивом
    if (!result[key]) {
      result[key] = [];
    }

    // Добавляем элемент в соответствующую группу
    result[key].push(item);
  }

  // Возвращается готовый объект
  return result;
};

// Входные данные
const array = [{ id: "1" }, { id: "1" }, { id: "2" }];

// Вызов метода
const grouped = array.groupBy((item) => item.id);

console.log(grouped);
