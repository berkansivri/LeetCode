/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const res = []
  const iter = (node, leafs) => {
    if (!node) return
    leafs.push(node.val)
    iter(node.left, [...leafs])
    iter(node.right, [...leafs])
    if (!node.right && !node.left) res.push(leafs)
  }
  iter(root, [])
  return res.map(leaf => leaf.join("->"))
};

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

console.log(binaryTreePaths(toBTree([1, 2, 3, null, 5])));