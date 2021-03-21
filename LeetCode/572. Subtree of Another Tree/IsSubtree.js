const { toBTree } = require('./utils')
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function (s, t) {
  const isSame = (node1, node2) => {
    if (!node1 || !node2) return node1 === node2
    if (node1.val !== node2.val) return false
    return isSame(node1.left, node2.left) && isSame(node1.right, node2.right)
  }

  const dfs = node => {
    if (!node) return false
    if (isSame(node, t)) return true
    return dfs(node.left) || dfs(node.right)
  }

  return dfs(s)
}

console.log(isSubtree(toBTree([3, 4, 5, 1, 2]), toBTree([4, 1, 2])))
