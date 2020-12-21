const isPalindrome = (s) => {
  let input = s.replace(/[^0-9a-z]/gi, "").toLowerCase();
  let inputarr = [];
  let reverse = "";

  for (let i = 0; i < input.length; i++) {
    inputarr.push(input[i]);
  }
  for (let i = 0; i < input.length; i++) {
    reverse += inputarr.pop();
  }
  return input == reverse;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
