var containsDuplicate = function (nums) {
  return new Set([...nums]).size < nums.length;
};

console.log(containsDuplicate([1, 2, 3, 4, 3, 5]));
