// Написать функцию, проверяющую, соответствует ли значение ожидаемому

var expect = function (val) {
  return {
    toBe: function (expected) {
      if (val == expected) {
        // метод toBe проверяет, равны ли значения val ожидаемым
        return true; // если равны - true
      } else {
        throw new Error("Not Equal"); // если не равны, выбрасывается ошибка
      }
    },
    notToBe: function (expected) {
      if (val !== expected) {
        // toBe проверяет, НЕ равны ли значения val ожидаемым
        return true; // если НЕ равны - true
      } else {
        throw new Error("Equal"); // если равны, выбрасывается ошибка
      }
    },
  };
};

// console.log(expect(5).toBe(5));     // true  (число === число)
// console.log(expect(5).toBe("5"));   // Error: Not Equal (число !== строка)
