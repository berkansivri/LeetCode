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
 * @return {number}
 */
// DFS
var getMinimumDifference = function (root) {
  let prev = Infinity
  let min = Infinity

  const traverse = node => {
    if (!node) return
    traverse(node.left)
    min = Math.min(min, Math.abs(node.val - prev))
    prev = node.val
    traverse(node.right)
  }

  traverse(root)
  return min
}

// recursive
var getMinimumDifference2 = function (root) {
  let arr = []

  const iter = node => {
    if (!node) return
    arr.push(node.val)
    iter(node.left)
    iter(node.right)
  }
  iter(root)

  return Math.abs(
    Math.min(
      ...arr
        .sort((a, b) => a - b)
        .slice(1)
        .map((x, i) => x - arr[i])
    )
  )
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

console.log(getMinimumDifference(toBTree([1, null, 3, 2])))
console.log(getMinimumDifference(toBTree([236, 104, 701, null, 227, null, 911])))
