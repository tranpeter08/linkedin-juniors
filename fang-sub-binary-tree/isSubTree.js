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

module.exports = {isSubTree};