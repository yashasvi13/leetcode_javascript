var reverse = function (x) {
  //Math.pow = 2 ** 31
  //sign -> Math.sign()
  const limit = Math.pow(2, 31) - 1;
  let sign = x > 0 ? 1 : -1;
  let reversedNumber = "";
  let num = Math.abs(x).toString();
  let len = num.length - 1;
  for (let i = len; i >= 0; i--) {
    reversedNumber += num[i];
  }
  return Number(reversedNumber) > limit ? 0 : Number(reversedNumber) * sign;
};

console.log(reverse(-1345));
