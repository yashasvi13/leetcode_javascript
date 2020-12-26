//two class-> node and bst
//node-> to define each node with 3 properties, data, left and right(pointing to left and right node)

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node();
      return;
    } else {
      const searchTree = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }

  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  finMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (current.data < data) {
        current = current.right;
      } else {
        current = current.left;
      }
      if (current === null) {
        return null;
      }
    }
    return current.data;
  }

  isPresent(data) {
    let current = this.root;
    while (current.data !== data) {
      if (current.data === data) {
        return true;
      }
      if (current.data < data) {
        current = current.right;
      } else {
        current = current.left;
      }
    }
    return false;
  }

  remove(data) {
    let node = this.root;
    const removeNode = function (node, data) {
      if (node.data !== data) {
        return null;
      }
      if (node.data === data) {
        //node has no children
        if (node.left === null && node.right === null) {
          return null;
        }
        //no left child
        if (node.left === null) {
          return node.right;
        }
        //no right child
        if (node.right === null) {
          return node.left;
        }
        //node has 2 children
        var tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, node.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(node, data);
  }
}

const bst = new BST();

bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);
