// 🧠
var canConstruct = function (ransomNote, magazine) {
  let magArray = magazine.split(""); // разбиваем строку magazine на массив отдельных символов.
  for (let char of ransomNote) {
    const index = magArray.indexOf(char); // ищем текущую букву char в массиве журнала. indexOf() возвращает:
    // Индекс первого найденного совпадения. -1, если буква не найдена
    if (index === -1) {
      return false; // Если буквы нет в журнале → записку составить невозможно.
    }
    // Удаляем найденную букву, чтобы не использовать её повторно
    magArray.splice(index, 1);
  }
  return true;
};
