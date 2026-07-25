// Функции. greet(name)
function greet(name) {
  // console.log(`Привет, ${name}!`);
}

greet("Аня");
greet("Вася");

// square(n)
function square(n) {
  return n ** 2;
}

// console.log(square(4));
// console.log(square(7));

// max(a, b)
function max(a, b) {
  let result = a > b ? a : b;
  return result;
}

// либо через if/else
// function max(a, b) {
//   if (a > b) return a;
//   return b;
// }

// console.log(max(3, 7));
// console.log(max(10, 5));
// console.log(max(4, 4));

// isEven(n)
function isEven(n) {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// console.log(isEven(4));
// console.log(isEven(7));
// console.log(isEven(0));
