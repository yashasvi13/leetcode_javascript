var topKFrequent = function (words, k) {
  let mp = new Map();
  let arr = [];
  words.map((word) => {
    mp.set(word, (mp.get(word) || 0) + 1);
  });

  //sorting hashmap
  const mapSort = [...mp.entries()].sort((a, b) => {
    let compare = b[1] - a[1];
    if (compare === 0) return a[0].localeCompare(b[0]);
    else return compare;
  });

  while (arr.length < k) {
    arr.push(mapSort[arr.length][0]);
  }
  return arr;
};

console.log(
  topKFrequent(["hate", "love", "leetcode", "i", "love", "coding"], 2)
);
