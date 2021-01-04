var nextGreaterElement = function (nums2, nums1) {
  let stack = [];
  let arr = [];
  let mp = new Map();
  for (let i = nums1.length - 1; i >= 0; i--) {
    if (stack.length === 0) {
      mp.set(nums1[i], -1);
    } else if (stack.length > 0 && stack[stack.length - 1] > nums1[i]) {
      mp.set(nums1[i], stack[stack.length - 1]);
    } else if (stack.length > 0 && stack[stack.length - 1] <= nums1[i]) {
      while (stack.length > 0 && stack[stack.length - 1] <= nums1[i]) {
        stack.pop();
      }
      if (stack.length === 0) {
        mp.set(nums1[i], -1);
      } else {
        mp.set(nums1[i], stack[stack.length - 1]);
      }
    }
    stack.push(nums1[i]);
  }

  return nums2.map((n) => mp.get(n) || -1);
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
