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
 * @return {number[]}
 */
var findMode = function (root) {
  let result = []
  let count = 0,
    max = 0,
    prev = 0

  const preorder = node => {
    if (!node) return
    preorder(node.left)
    count = prev === node.val ? count + 1 : 1

    if (count > max) {
      max = count
      result = [node.val]
    } else if (count === max) {
      result.push(node.val)
    }

    prev = node.val
    preorder(node.right)
  }

  preorder(root)
  return result
}

console.log(findMode(toBTree([1, null, 2, 2]))) // [2]
