const twoSum = (nums, target) => {
  let mp = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (mp.has(nums[i])) {
      return [mp.get(nums[i]), i];
    }
    mp.set(target - nums[i], i);
  }
};

console.log(twoSum([3, 3, 2], 6));
