const merge = (nums1, m, nums2, n) => {
  nums1.splice(m, nums1.length - m);
  nums2.splice(n, nums2.length - n);

  let i = 0;
  let j = 0;

  while (j < nums2.length) {
    if (nums1[i] === undefined || nums1[i] > nums2[j]) {
      nums1.splice(i, 0, nums2[j]);
      i++;
      j++;
    } else {
      i++;
    }
  }
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
