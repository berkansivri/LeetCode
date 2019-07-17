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
var sumNumbers = function (root) {
  let sum = 0
  const iter = (node, last) => {
    if (!node) return
    node.val = last.toString() + node.val
    if (!node.left && !node.right) sum += +node.val
    else {
      iter(node.left, node.val)
      iter(node.right, node.val)
    }
  }
  iter(root, "")
  return sum
};

console.log(sumNumbers(toBTree([4, 9, 0, 5, 1])))
console.log(sumNumbers(toBTree([1, 2, 3])))
console.log(sumNumbers(toBTree([-10, 9, 20, null, null, 15, 7])))
console.log(sumNumbers(toBTree([])))

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