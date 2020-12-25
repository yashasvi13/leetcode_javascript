//Stacks are based on the LIFO principle, i.e., the element inserted at the last, is the first element to come out of the list.
//insertion/deletion only at one end(top)
//dynamic size, array->fixed size
//Stack can contain elements of different data type., array->same type
//stack->linear search, array->linear,binary

//use case
//1 reversing order
//2 testing symmetry (palindrome, valid parentheses)
//3 undoing

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
