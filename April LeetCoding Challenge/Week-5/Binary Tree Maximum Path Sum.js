/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  let max = -Infinity

  const iter = (node) => {
    if(!node) return 0
    let left = Math.max(0, iter(node.left))
    let right = Math.max(0, iter(node.right))
    max = Math.max(max, left + right + node.val)
    return Math.max(left, right) + node.val
  }
  iter(root)
  
  return max
}

function toBTree(array, i = 0) {
  if (array[i] == null) return null
  const root = new TreeNode(array[i])
  root.left = toBTree(array, i * 2 + 1)
  root.right = toBTree(array, i * 2 + 2)
  return root
}

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

console.log(maxPathSum(toBTree([1, 2, 3])))
console.log(maxPathSum(toBTree([-10, 9, 20, null, null, 15, 7])))
