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
var isValidBST = function (root) {
  const isValid = (root, min, max) => {
    if (!root) return true
    if (root.val >= max || root.val <= min) return false
    return isValid(root.left, min, root.val) && isValid(root.right, root.val, max)
  }
  return isValid(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
}

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

let a = new TreeNode(2)
a.left = new TreeNode(1)
a.right = new TreeNode(3)

console.log(isValidBST(a))
