/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  if (!root) return 0
  const depth = node => {
    if (!node) return 0
    let left = depth(node.left), right = depth(node.right)
    return 1 + (Math.min(left,right) || Math.max(left, right))
  }
  return depth(root)
}

console.log(minDepth(toBTree([1,2,3,4,null,null,5])))

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
