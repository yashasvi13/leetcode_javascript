const Stack = function () {
  this.count = 0;
  this.storage = {};

  //Add value onto the end of the stack
  this.push = (value) => {
    this.storage[this.count] = value;
    this.count++;
  };

  //Remove and return the last value added at the end of the stack (LIFO)
  this.pop = () => {
    if (this.count === 0) {
      return undefined;
    }
    let val = this.storage[this.count - 1];
    delete this.storage[this.count - 1];
    this.count--;
    return val;
  };

  //Peek at the last/top value of the stack
  this.peek = () => {
    if (this.count === 0) {
      return undefined;
    }
    return this.storage[this.count - 1];
  };

  //Size

  this.size = () => {
    return this.count;
  };
};

var myStack = new Stack();
myStack.push(1);
myStack.push(2);
console.log(myStack.pop());
console.log(myStack.peek());
