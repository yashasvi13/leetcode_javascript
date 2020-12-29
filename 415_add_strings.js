//need to improve space complexity
const addStrings = (num1, num2) => {
  const map = new Map();
  for (let i = 0; i <= 9; i++) {
    map.set(i.toString(), i);
  }
  let l1 = num1.length - 1;
  let l2 = num2.length - 1;
  let carry = 0;
  let reversedSumString = "";
  for (let i = 0; i <= Math.max(l1, l2); i++) {
    let sum =
      (num1[l1 - i] ? map.get(num1[l1 - i]) : 0) +
      (num2[l2 - i] ? map.get(num2[l2 - i]) : 0) +
      carry;
    let rem = sum % 10;
    reversedSumString += rem;

    carry = 0;
    if (sum > 9) {
      carry = 1;
    }
  }
  if (carry) {
    reversedSumString += carry;
  }
  let sumString = "";

  for (var i = reversedSumString.length - 1; i >= 0; i--) {
    sumString += reversedSumString[i];
  }
  return sumString;
};

console.log(addStrings("7", "9"));
