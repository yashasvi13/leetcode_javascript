const isAlienSorted = (words, order) => {
  let hashMap = new Map();
  let orderArray = order.split("");
  orderArray.map((letter, i) => {
    hashMap.set(letter, i);
  });

  let compareWords = (a, b) => {
    for (let i = 0; i <= Math.max(a.length, b.length); i++) {
      if (a[i] && b[i] && hashMap.get(a[i]) > hashMap.get(b[i])) {
        return false;
      }

      if (a[i] && b[i] && hashMap.get(a[i]) < hashMap.get(b[i])) {
        return true;
      } else if (a[i] && b[i] && hashMap.get(a[i]) === hashMap.get(b[i])) {
        continue;
      } else if (!a[i] && b[i]) {
        return true;
      } else if (!b[i] && a[i]) {
        return false;
      } else return true;
    }
  };
  for (let i = 0; i < words.length - 1; i++) {
    if (compareWords(words[i], words[i + 1])) {
      continue;
    } else return false;
  }
  return true;
};

console.log(
  isAlienSorted(
    ["jyohu", "fxasxpc", "dfbdrifhp", "jyohu"],
    "zkgwaverfimqxbnctdplsjyohu"
  )
);
