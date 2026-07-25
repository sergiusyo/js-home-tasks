// написать функцию, принимающую начальное целое число init, и возвращающую объект с тремя функциями
var createCounter = function (init) {
  let current_value = init;
  return {
    increment() {
      return ++current_value;
    },
    decrement() {
      return --current_value;
    },
    reset() {
      current_value = init; // current_value присваивается исходное значение init, возвращает сброшенное значение
      return current_value;
    },
  };
};

// const counter = createCounter(5);
// console.log(counter.increment()); // 6
// console.log(counter.decrement()); // 5
// console.log(counter.reset()); // 5  (сброс к 5)
