var MinStack = function () {
  this.count = 0;
  this.storage = {};
};

MinStack.prototype.push = function (x) {
  this.storage[this.count] =
    this.count === 0
      ? [x, x]
      : [x, Math.min(x, this.storage[this.count - 1][1])];
  this.count++;
  return;
};

MinStack.prototype.pop = function () {
  if (this.count === 0) {
    return;
  }
  delete this.storage[this.count - 1];
  this.count--;

  return;
};

MinStack.prototype.top = function () {
  return this.storage[this.count - 1][0];
};

MinStack.prototype.getMin = function () {
  return this.storage[this.count - 1][1];
};

let minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top(); // return 0
minStack.getMin(); // return -2

console.log(minStack.getMin());
