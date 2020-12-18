// Approach 1 => Kadane’s Algo
const maxSubArray = (nums) => {
  let max = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (max < sum) {
      max = sum;
    } else if (sum < 0) {
      sum = 0;
      if (max <= 0) {
        max = Math.max.apply(Math, nums);
      }
    }
  }

  return max;
};

console.log(maxSubArray([-1]));
