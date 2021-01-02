var numJewelsInStones = function (jewels, stones) {
  let mp = new Map();
  let js = 0;
  [...stones].forEach((stone) => {
    if (!mp.get(stone)) {
      mp.set(stone, 1);
    } else {
      mp.set(stone, mp.get(stone) + 1);
    }
  });
  [...jewels].forEach((jewel) => {
    if (mp.get(jewel)) {
      js = js + mp.get(jewel);
      mp.delete(jewel);
    }
  });

  return js;
};

console.log(numJewelsInStones("aA", "aAAbbb"));
