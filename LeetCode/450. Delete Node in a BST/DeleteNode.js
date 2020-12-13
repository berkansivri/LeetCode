/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

function inorder(node) {
  if (!node) return []
  return [...inorder(node.left), node.val, ...inorder(node.right)]
}

function build(arr) {
  if (!arr.length) return null
  const mid = ~~(arr.length / 2)
  const node = new TreeNode(arr[mid])
  node.left = build(arr.slice(0, mid))
  node.right = build(arr.slice(mid + 1))
  return node
}

/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  const removed = inorder(root).filter(x => x !== key)
  return build(removed)
}

function toBTree(array, i = 0) {
  if (array[i] == null) return null
  const root = new TreeNode(array[i])
  root.left = toBTree(array, i * 2 + 1)
  root.right = toBTree(array, i * 2 + 2)
  return root
}

deleteNode(toBTree([5, 3, 6, 2, 4, null, 7]), 3)
