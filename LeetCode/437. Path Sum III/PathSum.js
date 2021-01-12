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
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function (root, sum) {
  const freq = { 0: 1 }

  const dfs = (node, currSum) => {
    if (!node) return 0

    currSum += node.val
    const oldSum = currSum - sum
    let res = freq[oldSum] || 0
    freq[currSum] = (freq[currSum] || 0) + 1

    res += dfs(node.left, currSum) + dfs(node.right, currSum)
    freq[currSum]--
    return res
  }

  return dfs(root, 0)
}

console.log(pathSum(toBTree([10, 5, -3, 3, 2, null, 11, 3, -2, null, 1]), 8))
