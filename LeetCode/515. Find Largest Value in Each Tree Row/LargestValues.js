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
var largestValues = function (root) {
  if (!root) return []
  let result = []

  const iter = (node, level) => {
    if (!node) return
    result[level] = Math.max(result[level] ?? -Infinity, node.val)

    iter(node.left, level + 1)
    iter(node.right, level + 1)
  }

  iter(root, 0)
  return result
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const a = new TreeNode(2)
a.left = new TreeNode(1)
a.right = new TreeNode(3)

console.log(largestValues(a))
