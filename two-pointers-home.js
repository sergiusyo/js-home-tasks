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
console.log("Исходный массив:", myArray);

reversedArray(myArray);
console.log("Перевернутый массив:", myArray);
