/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  const iter = (node, sum) => {
    if (!node) return false
    if (!node.left && !node.right && sum - node.val === 0) return true
    return iter(node.left, sum - node.val) || iter(node.right, sum - node.val)
  }
  return iter(root, sum)
}

console.log(
  hasPathSum(toBTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]), 22)
)

function toBTree(array, i = 0) {
  if (array[i] == null) return null
  const root = new TreeNode(array[i])
  root.left = toBTree(array, i * 2 + 1)
  root.right = toBTree(array, i * 2 + 2)
  return root
}

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}
