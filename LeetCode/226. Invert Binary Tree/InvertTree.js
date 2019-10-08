/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  const invertNode = (node) => {
    if (node) {
      let temp = node.left
      node.left = node.right
      node.right = temp
      invertNode(node.left)
      invertNode(node.right)
    }
  }
  invertNode(root)
  return root
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

console.log(invertTree(toBTree([4, 2, 7, 1, 3, 6, 9])));
