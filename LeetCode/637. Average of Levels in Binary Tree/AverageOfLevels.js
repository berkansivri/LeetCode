/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const { toBTree } = require('./utils')

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  const avgs = []
  let queue = [root]

  while (queue.length) {
    const next = []
    let sum = 0

    for (const node of queue) {
      sum += node.val
      if (node.left) next.push(node.left)
      if (node.right) next.push(node.right)
    }

    avgs.push(sum / queue.length)
    queue = next
  }

  return avgs
}

averageOfLevels(toBTree([3, 9, 20, null, null, 15, 7]))
