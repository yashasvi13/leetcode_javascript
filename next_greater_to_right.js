const ngr = (nums) => {
  let res = [];
  let stack = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    if (stack.length === 0) {
      res.push(-1);
    } else if (stack.length > 0 && stack[stack.length - 1] <= nums[i]) {
      while (stack.length > 0 && stack[stack.length - 1] <= nums[i]) {
        stack.pop();
      }
      if (stack.length === 0) {
        res.push(-1);
      } else {
        res.push(stack[stack.length - 1]);
      }
    } else if (stack.length > 0 && stack[stack.length - 1] > nums[i]) {
      res.push(stack[stack.length - 1]);
    }
    stack.push(nums[i]);
  }
  return res.reverse();
};

console.log(ngr([1, 3, 2, 4]));
