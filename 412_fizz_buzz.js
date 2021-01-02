var fizzBuzz = function (n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    let temp = "";
    if (i % 3 === 0) {
      temp += "Fizz";
    }
    if (i % 5 === 0) {
      temp += "Buzz";
    }
    if (!temp) {
      temp += i;
    }
    arr.push(temp);
  }
  return arr;
};

console.log(fizzBuzz(20));
