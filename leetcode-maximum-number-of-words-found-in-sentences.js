// Для каждой строки считаешь пробелы + 1, сравниваешь с текущим максимумом. Два паттерна (счётчик + max) в одном цикле.
// var mostWordsFound = function (sentences) {
//   let maxWords = 0; // макс.кол-во слов, изначально равно 0.

// for (let i = 0; i < sentences.length; i++) {
// Количество слов = количество пробелов + 1
// let wordCount = sentences[i].split(" ").length; // количество слов. Разбивает строку на массив
// подстрок по пробелу и возвращает кол-во эл-тов массива (слов).

// Сравниваем с текущим максимумом
// if (wordCount > maxWords) {
//   maxWords = wordCount; // Если в текущем предложении слов больше,
// чем было найдено ранее, обновляем maxWords.
// }
// }

// return maxWords;
// };

// console.log(mostWordsFound(["alice and bob love leetcode"]));
// console.log(mostWordsFound(["i think so too"]));
// console.log(mostWordsFound(["this is great thanks very much"]));
