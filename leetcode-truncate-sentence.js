var truncateSentence = function (s, k) {
  return s.split(" ", 5).join(" ");
};

console.log(
  truncateSentence(
    "chopper is not a tanuki is the solution to this problem",
  ),
);
