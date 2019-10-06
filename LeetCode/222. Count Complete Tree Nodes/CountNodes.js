/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  if (!root) return 0
  let count = 1
  const iter = (node) => {
    if (node.left) {
      count++
      iter(node.left)
    }
    if (node.right) {
      count++
      iter(node.right)
    }
  }
  iter(root)
  return count
};

console.log(countNodes(toBTree([])));
console.log(countNodes(toBTree([1, 2, 3, 4, 5, 6])));

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
