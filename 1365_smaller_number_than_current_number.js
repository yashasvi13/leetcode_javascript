var smallerNumbersThanCurrent = function (nums) {
  let mp = new Map();
  let sorted = [...nums].sort((a, b) => a - b);
  let arr = [];
  let sum = 0;
  for (let i = 0; i < sorted[sorted.length - 1] + 1; i++) {
    mp.set(i, 0);
  }

  for (let i = 0; i < nums.length; i++) {
    mp.set(nums[i], mp.get(nums[i]) + 1);
  }

  for (let values of mp) {
    sum += values[1];
    mp.set(values[0], sum);
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      arr.push(0);
    } else arr.push(mp.get(nums[i] - 1));
  }

  return arr;
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));

//[4,0,1,1,3]
