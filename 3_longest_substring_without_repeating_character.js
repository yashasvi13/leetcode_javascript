var lengthOfLongestSubstring = function (s) {
  let mp = new Map();
  let mx = 0;
  let i = 0;
  let j = 0;

  while (j < s.length) {
    if (!mp.get(s.charAt(j))) {
      mp.set(s.charAt(j), 1);
    } else {
      mp.set(s.charAt(j), mp.get(s.charAt(j)) + 1);
    }
    if (mp.size === j - i + 1) {
      mx = mx > j - i + 1 ? mx : j - i + 1;
      j++;
    } else if (mp.size < j - i + 1) {
      while (mp.size < j - i + 1) {
        mp.set(s.charAt(i), mp.get(s.charAt(i)) - 1);
        if (mp.get(s[i]) === 0) {
          mp.delete(s[i]);
        }
        i++;
      }
      j++;
    }
  }
  return mx;
};

console.log(lengthOfLongestSubstring("aulkjh"));
