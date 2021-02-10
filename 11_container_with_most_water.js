var maxArea = function (height) {
  let i = 0;
  let j = height.length - 1;
  let area = 0;
  while (j - i > 0) {
    let minHeight = Math.min(height[i], height[j]);
    area = Math.max(area, (j - i) * minHeight);
    if (height[i] > height[j]) {
      j--;
    } else {
      i++;
    }
  }
  return area;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
