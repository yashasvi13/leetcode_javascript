var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let letterCount = new Map();

  for (let letter of s) {
    if (!letterCount.has(letter)) {
      letterCount.set(letter, 1);
    } else {
      letterCount.set(letter, letterCount.get(letter) + 1);
    }
  }

  for (let letter of t) {
    if (!letterCount.has(letter)) {
      return false;
    } else if (letterCount.get(letter) < 1) {
      return false;
    }
    letterCount.set(letter, letterCount.get(letter) - 1);
  }
  return true;
};
console.log(isAnagram("aacc", "accc"));
