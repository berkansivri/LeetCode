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
var findFrequentTreeSum = function (root) {
  const counts = {}
  const max = { val: -Infinity }
  dfs(root, counts, max)

  const sums = []
  for (const key in counts) {
    if (counts[key] === max.val) sums.push(parseInt(key))
  }

  return sums
}

const dfs = (root, counts, max) => {
  if (!root) return 0
  const sum = root.val + dfs(root.left, counts, max) + dfs(root.right, counts, max)
  counts[sum] = (counts[sum] || 0) + 1
  max.val = Math.max(max.val, counts[sum])
  return sum
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const a = new TreeNode(5)
a.left = new TreeNode(2)
a.right = new TreeNode(-3)
a.left.left = new TreeNode(4)
a.left.right = new TreeNode(3)
console.log(findFrequentTreeSum(a))

const b = new TreeNode(5)
b.left = new TreeNode(2)
b.right = new TreeNode(-5)
console.log(findFrequentTreeSum(b))
