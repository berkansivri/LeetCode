/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var pathSum = function (root, sum) {
  const result = []

  const iter = (node, sum, path) => {
    if (!node) return
    path.push(node.val)
    if (!node.left && !node.right && sum - node.val === 0) result.push([...path])
    iter(node.left, sum - node.val, path)
    iter(node.right, sum - node.val, path)
    path.pop()
  }
  iter(root, sum, [])
  return result
}

console.log(pathSum(toBTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]), 22))

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
