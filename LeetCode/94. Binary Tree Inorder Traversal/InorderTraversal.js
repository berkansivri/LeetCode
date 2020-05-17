/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  let stack = [],
    res = []
  while (root || stack.length) {
    if (root) {
      stack.push(root)
      root = root.left
    } else {
      root = stack.pop()
      res.push(root.val)
      root = root.right
    }
  }
  return res
}

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}
var param = new TreeNode(1)
param.right = new TreeNode(2)
param.right.left = new TreeNode(3)

console.log(inorderTraversal(param))
