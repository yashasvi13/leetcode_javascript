//an array with no duplicate item and no particular order
//use case: to check presence of a particular item

// methods => add, remove, size, has, union, difference, intersection
const mySet = function () {
  let collection = [];

  this.values = function () {
    return collection;
  };

  this.has = function (value) {
    if (collection.indexOf(value) !== -1) {
      return true;
    }
    return false;
  };

  this.add = function (value) {
    if (this.has(value)) {
      return false;
    }
    collection.push(value);
    return true;
  };

  this.remove = function (value) {
    if (this.has(element)) {
      let index = collection.indexOf(value);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  this.size = function () {
    return collection.length;
  };

  this.union = function (otherSet) {
    let unionSet = new mySet();
    let firstSet = this.values();
    let secondSet = otherSet.values();

    firstSet.forEach((elem) => {
      unionSet.add(elem);
    });
    secondSet.forEach((elem) => {
      unionSet.add(elem);
    });

    return unionSet;
  };

  this.difference = function (otherSet) {
    let differenceSet = new mySet();
    let firstSet = this.values();

    firstSet.forEach((elem) => {
      if (!otherSet.has(elem)) {
        differenceSet.add(elem);
      }
    });
    return differenceSet;
  };

  this.intersection = function (otherSet) {
    let interactionSet = new mySet();
    let firstSet = this.values();

    firstSet.forEach((elem) => {
      if (otherSet.has(elem)) {
        interactionSet.add(elem);
      }
    });
    return interactionSet;
  };

  this.subset = function (otherSet) {
    let firstSet = this.values();

    return firstSet.every((elem) => {
      return otherSet.has(elem);
    });
    r;
  };
};

var setA = new mySet();
var setB = new mySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());

var setC = new Set();
var setD = new Set();
setC.add("a");
setD.add("b");
setD.add("c");
setD.add("a");
setD.add("d");
console.log(setD.values());
setD.delete("a");
console.log(setD.has("a"));
console.log(setD.add("d"));
