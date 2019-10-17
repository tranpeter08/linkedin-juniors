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

const treeS = new Node(3);

treeS.left = new Node(4);
treeS.right = new Node(5);

treeS.left.left = new Node(1);
treeS.left.right = new Node(2);

const treeT = new Node(4);
treeT.left = new Node(1);
treeT.right = new Node(2);

const treeS2 = new Node(3);

treeS2.left = new Node(4);
treeS2.right = new Node(5);

treeS2.left.left = new Node(1);
treeS2.left.right = new Node(2);
treeS2.left.right.left = new Node(0);

describe('subTree()', () => {
  it('determines if the a tree is a sub tree of given tree', () => {
    expect(isSubTree(tree, tree2)).toBe(true);
    expect(isSubTree(tree, tree3)).toBe(true);
    expect(isSubTree(tree, tree4)).toBe(false);
    expect(isSubTree(tree, tree5)).toBe(false);
    expect(isSubTree(tree, tree6)).toBe(true);
    expect(isSubTree(treeS, treeT)).toBe(true);
    expect(isSubTree(treeS2, treeT)).toBe(false);
  })
});