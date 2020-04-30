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
 * @param {number[]} arr
 * @return {boolean}
 */
var isValidSequence = function (root, arr) {

  const iter = (node, index) => {
    if(!node || index >= arr.length) return false
    if(node.val === arr[index]) {
      if(!node.left && !node.right && index === arr.length - 1) return true
      return iter(node.left, index+1) || iter(node.right, index+1)
    }
    return false
  }
  return iter(root, 0)
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

console.log(
  isValidSequence(
    toBTree([0, 1, 0, 0, 1, 0, null, null, 1, 0, 0]), [0, 0, 1]
  )
)
console.log(
  isValidSequence(
    toBTree([0, 1, 0, 0, 1, 0, null, null, 1, 0, 0]), [0, 1, 1]
  )
)
console.log(
  isValidSequence(
    toBTree([0, 1, 0, 0, 1, 0, null, null, 1, 0, 0]), [0, 1, 0, 1]
  )
)
