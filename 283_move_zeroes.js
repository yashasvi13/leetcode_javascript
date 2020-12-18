//Approach 1
const moveZeroes = (nums) => {
  for (let i = nums.length; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }
  return nums;
};

console.log(moveZeroes([0, 0, 1]));
