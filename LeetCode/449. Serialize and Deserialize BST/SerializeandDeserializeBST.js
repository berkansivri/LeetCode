/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root, str = '') {
  if (!root) return ''
  return '' + root.val + ',' + serialize(root.left) + ',' + serialize(root.right)
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  function helper(arr) {
    const val = arr.shift()
    if (!val) return null
    const node = new TreeNode(val)
    node.left = helper(arr)
    node.right = helper(arr)
    return node
  }
  return helper(data.split(','))
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

const node = new TreeNode(10)
node.left = new TreeNode(5)
node.right = new TreeNode(15)
node.left.left = new TreeNode(3)
node.left.right = new TreeNode(7)
node.right.left = new TreeNode(12)
node.right.right = new TreeNode(18)
node.right.right.left = new TreeNode(17)
node.right.right.right = new TreeNode(19)

console.log(serialize(node))
console.log(deserialize(serialize(node)))
