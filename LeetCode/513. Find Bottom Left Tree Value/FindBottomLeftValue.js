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
var findBottomLeftValue = function (root) {
  let leftMost = { val: root.val, level: 0 }

  const iter = (node, level) => {
    if (!node) return
    if (level > leftMost.level) {
      leftMost = { val: node.val, level }
    }
    iter(node.left, level + 1)
    iter(node.right, level + 1)
  }

  iter(root, 0, leftMost)
  return leftMost.val
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const a = new TreeNode(2)
a.left = new TreeNode(1)
a.right = new TreeNode(3)

console.log(findBottomLeftValue(a))
