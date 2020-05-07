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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  const map = {}
  const iter = (node, parent, depth) => {
    if (!node || (map[x] && map[y])) return
    if (node.val === x || node.val === y) {
      map[node.val] = { depth, parent }
    }
    iter(node.left, node, depth + 1)
    iter(node.right, node, depth + 1)
  }
  iter(root, null, 0)
  return map[x].depth === map[y].depth && map[x].parent !== map[y].parent
}

function toBTree(array, i = 0) {
  if (array[i] == null) return null
  const root = new TreeNode(array[i])
  root.left = toBTree(array, i * 2 + 1)
  root.right = toBTree(array, i * 2 + 2)
  return root
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

console.log(isCousins(toBTree([1, 2, 3, 4]), 4, 3))
console.log(isCousins(toBTree([1, 2, 3, null, 4, null, 5]), 5, 4))
console.log(isCousins(toBTree([1, 2, 3, null, 4]), 2, 3))
