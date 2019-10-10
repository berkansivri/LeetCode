/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let result = null
  const iter = (node) => {
    if (!node) return
    iter(node.left)
    k--
    if (k === 0) {
      result = node.val
      return
    }
    iter(node.right)
  }
  iter(root)
  return result
};


function toBTree(array, i = 0) {
  if (array[i] == null) return null
  const root = new TreeNode(array[i])
  root.left = toBTree(array, i * 2 + 1)
  root.right = toBTree(array, i * 2 + 2)
  return root
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

console.log(kthSmallest(toBTree([5, 3, 6, 2, 4, null, null, 1]), 3))
console.log(kthSmallest(toBTree([3, 1, 4, null, 2]), 1))
