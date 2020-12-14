const twoSum = (nums, target) => {
  let hash = new Map();
  let length = nums.length;
  for (let i = 0; i < length; i++) {
    if (hash[nums[i]] >= 0) {
      return [hash[nums[i]], i];
    }
    hash[target - nums[i]] = i;
  }
  return [];
};

console.log(twoSum([3, 3, 2], 6));
