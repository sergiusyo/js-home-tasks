// 🔥 Разминка — задачи для разогрева
// Перевернуть массив через два указателя.

function reversedArray(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];

    left++;
    right--;
  }
}

const myArray = [1, 2, 3, 4, 5];
// console.log("Исходный массив:", myArray);

reversedArray(myArray);
console.log("Перевернутый массив:", myArray);

// Является ли "level" палиндромом?
// function reversedString(str) {
//   const arr = str.split("");
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     [arr[left], arr[right]] = [arr[right], arr[left]];
//     left++;
//     right--;
//   }

//   return arr.join("");
// }

function reversedString(str) {
  const arr = str.split("");
  for (let left = 0, right = arr.length - 1; left < right; left++, right--) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
  }
  return arr.join("");
}

console.log(reversedString("level")); // палиндром!

// Есть ли пара с суммой?
const arr = [1, 3, 5, 7, 9];
const target = 8;

let left = 0; // 0 (1)
let right = arr.length - 1; // 4 (9)

while (left < right) {
  // Вычисляем сумму элементов под указателями
  const currentSum = arr[left] + arr[right];

  if (currentSum === target) {
    console.log(`Пара найдена: ${arr[left]} и ${arr[right]}`);
    break; // // или return true из функции
  } else if (currentSum < target) {
    // Если сумма меньше цели, двигаем левый указатель вправо,
    // чтобы увеличить сумму
    left++;
  } else {
    // Если сумма больше цели, двигаем правый указатель влево,
    // чтобы уменьшить сумму
    right--;
  }
}
