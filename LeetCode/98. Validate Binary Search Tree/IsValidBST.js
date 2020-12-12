/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
  if (!root) return true
  if (root.val >= max || root.val <= min) return false
  return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max)
}

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

let a = new TreeNode(2)
a.left = new TreeNode(1)
a.right = new TreeNode(3)

console.log(isValidBST(a))
