'use strict';

function isSubTree(s, t) {
  const node = findNode(t.data, s);
  if (!node) return false;

  return compareNodes(node, t);
}

function findNode(value, currentNode) {
  if (!currentNode) {
    return false;
  }

  if (currentNode.data === value) {
    return currentNode;
  }

  const left = findNode(value, currentNode.left);
  const right = findNode(value, currentNode.right);

  return left ? left : right;
}

function compareNodes(currentNode, subTree) {
  // initialize queue
  const queue = [
    [currentNode.left, subTree.left],
    [currentNode.right, subTree.right]
  ];

  while (queue.length) {
    const nodes = queue.shift();
    const node = nodes[0];
    const refNode = nodes[1];

    if (node === null && refNode === null) {
      continue;
    }

    // check if only one is null
    if ((node === null || refNode === null) && node !== refNode) {
      return false;
    }

    if (node.data !== refNode.data) {
      return false;
    };

    if (!(node.left === null && refNode.left === null)) {
      queue.push([node.left, refNode.left]);
    }

    if (!(node.right === null && refNode.right === null)) {
      queue.push([node.right, refNode.right]);
    }
  }

  return true;
}

class Node {  
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

const tree = new Node(1);

tree.left = new Node(2);
tree.right = new Node(3);

tree.left.left = new Node(4);
tree.right.left = new Node(5);
tree.right.right = new Node(6);

tree.left.left.left = new Node(7);
tree.left.left.right = new Node(8);



const tree2 = new Node(3);
tree2.left = new Node(5);
tree2.right = new Node(6);

const tree3 = new Node(4);
tree3.left = new Node(7);
tree3.right = new Node(8);

const tree4 = new Node(2);
tree4.left = new Node(4);

const tree5 = new Node(4);
tree5.left = new Node(7);
tree5.left.left = new Node(8);

const tree6 = new Node(1);

tree6.left = new Node(2);
tree6.right = new Node(3);

tree6.left.left = new Node(4);
tree6.right.left = new Node(5);
tree6.right.right = new Node(6);

tree6.left.left.left = new Node(7);
tree6.left.left.right = new Node(8);

console.log(isSubTree(tree, tree2));
console.log(isSubTree(tree, tree3));
console.log(isSubTree(tree, tree4));
console.log(isSubTree(tree, tree5));
console.log(isSubTree(tree, tree6));

module.exports = {isSubTree};