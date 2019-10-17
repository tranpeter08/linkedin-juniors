const {isSubTree} = require('./isSubTree');

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

describe('subTree()', () => {
  it('determines if the sub tree is a sub tree of given tree', () => {
    expect(isSubTree(tree, tree2)).toBe(true);
    expect(isSubTree(tree, tree3)).toBe(true);
    expect(isSubTree(tree, tree4)).toBe(false);
    expect(isSubTree(tree, tree5)).toBe(false);
    expect(isSubTree(tree, tree6)).toBe(true);
  })
});