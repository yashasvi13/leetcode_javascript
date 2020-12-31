var maxSlidingWindow = function (nums, k) {
  let max = [];
  let i = 0;
  let j = 0;
  let x = [];
  if (!nums || nums.length < k) return [];
  while (j < nums.length) {
    while (x.length > 0 && x[x.length - 1] < nums[j]) {
      x.pop();
    }
    x.push(nums[j]);
    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 === k) {
      max.push(x[0]);
      if (nums[i] === x[0]) {
        x.shift();
      }
      i++;
      j++;
    }
  }
  return max;
};

console.log(maxSlidingWindow([1, 3, 1, 2, 0, 5], 3));
