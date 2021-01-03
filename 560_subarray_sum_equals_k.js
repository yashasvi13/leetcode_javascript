var subarraySum = function (nums, k) {
  let count = 0;
  let mp = new Map();
  mp.set(0, 1);
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (mp.has(sum - k)) {
      count += mp.get(sum - k);
    }
    if (mp.has(sum)) {
      mp.set(sum, mp.get(sum) + 1);
    } else mp.set(sum, 1);
  }
  return count;
};

console.log(subarraySum([1, -1, 0], 0));
