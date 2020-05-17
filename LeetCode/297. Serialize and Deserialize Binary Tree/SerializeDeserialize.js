/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  if (!root) return {}
  let node = root
  let map = { 0: [node.val] }
  const iter = (node, lvl) => {
    if (!node) return
    map[lvl] = map[lvl] || []
    map[lvl].push(node.left ? node.left.val : null)
    iter(node.left, lvl + 1)
    map[lvl].push(node.right ? node.right.val : null)
    iter(node.right, lvl + 1)
  }
  iter(node, 1)
  delete map[Object.values(map).length - 1]
  return map
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  let tree = new TreeNode()
  let node = tree
  const iter = (node, lvl) => {
    if (data[lvl]) {
      let val = data[lvl].shift()
      if (val !== null) {
        node.left = new TreeNode(val)
        iter(node.left, lvl + 1)
      }
      val = data[lvl].shift()
      if (val !== null) {
        node.right = new TreeNode(val)
        iter(node.right, lvl + 1)
      }
    }
  }
  iter(node, 0)
  return tree.left
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

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

const obj = serialize(toBTree([1, 2, 3, null, null, 4, 5]))
console.log(obj)
const tree = deserialize(obj)
console.log(tree)
// console.log(serialize(toBTree([1,2,3,null,null,4,5,null,null,null,null,6,7])));
