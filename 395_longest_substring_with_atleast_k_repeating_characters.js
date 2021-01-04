var longestSubstring = function (s, k) {
  let i = 0;
  let j = 0;
  let mp = new Map();
  let mx = 0;
  let count = 0;
  while (j < s.length) {
    if (!mp.get(s.charAt(j))) {
      mp.set(s.charAt(j), 1);
    } else {
      mp.set(s.charAt(j), mp.get(s.charAt(j)) + 1);
    }
    if (mp.get(s.charAt(j)) < k) {
      j++;
    } else if (mp.get(s.charAt(j)) >= k) {
      j++;
      count++;
    }
    if (count === mp.size) {
      mx = j - i + 1 > mx ? j - i + 1 : mx;

      j++;
    } else if (j === s.length && mp.get(s.charAt(j)) < k) {
      while (j === s.length && mp.get(s.charAt(j)) < k) {
        mp.set(s.charAt(i), mp.get(s.charAt(i)) - 1);
        if (mp.get(s.charAt(i)) === 0) {
          mp.delete(s.charAt(i));
          count--;
        }
        i++;
      }
      j++;
    }
  }
  return mx;
};

//buggy

console.log(longestSubstring("aaab", 2));
