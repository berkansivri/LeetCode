/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
  this.stack = []
  const toArray = (node) => {
    if (!node) return
    this.stack.push(node.val)
    toArray(node.left)
    toArray(node.right)
  }
  toArray(root)
  this.stack.sort((a, b) => b - a)
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  return this.stack.pop()
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.stack.length
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

let p = new TreeNode(7)
p.left = new TreeNode(3)
p.right = new TreeNode(15)
p.right.left = new TreeNode(9)
p.right.right = new TreeNode(20)
console.log(BSTIterator(p));

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}