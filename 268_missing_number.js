var missingNumber = function (nums) {
  for (let i = 0; i <= nums.length; i++) {
    if (nums.indexOf(i) === -1) {
      return i;
    }
  }
};

console.log(missingNumber([0, 1]));