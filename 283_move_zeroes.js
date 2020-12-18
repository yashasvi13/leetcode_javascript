const moveZeroes = (nums) => {
  nums.map((num, i) => {
    if (num === 0) {
      nums.push(num);
      nums.splice(i, 1);
    }
    if (nums[i - 1] === 0) {
      nums.push(nums[i - 1]);
      nums.splice(i - 1, 1);
    }
  });

  return nums;
};

console.log(moveZeroes([0, 0, 1]));
