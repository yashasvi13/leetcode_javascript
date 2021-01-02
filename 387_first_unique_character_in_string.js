var firstUniqChar = function (s) {
  let mp = new Map();

  [...s].forEach((char) => {
    mp.set(char, (mp.get(char) || 0) + 1);
  });
  console.log(mp);
  for (let key of mp) {
    if (key[1] === 1) {
      return s.indexOf(key[0]);
    }
  }
  return -1;
};

console.log(firstUniqChar("loveleetcode"));

//without map
// var firstUniqChar = function(s) {
//     let index = -1;
//     for (let i = 0; i < s.length; i++) {
//         const prev = s.indexOf(s[i]);
//         const post = s.indexOf(s[i], i + 1);
//         if (prev === i && post === -1) {
//             index = i;
//             break;
//         }
//     }
//     return index;
// };
