var expect = function (val) {
  return {
    toBe: function (expected) {
      if (val === expected) {
        // toBe проверяет, равны ли значения val ожидаемым
        return true;
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

// expect(5).toBe(5);     // true  (число === число)
// expect(5).toBe("5");   // Error: Not Equal (число !== строка)
