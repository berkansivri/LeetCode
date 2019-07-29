/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  let res = [], stack = []
  while (root) {
    res.push(root.val)
    if (root.right) stack.push(root.right)
    if (root.left)
      root = root.left
    else
      root = stack.pop() 
  }
  return res
};

console.log(preorderTraversal(toBTree([1, 2, 3, 4, 5])));
console.log(preorderTraversal(toBTree([1, null, 2, 3])));
console.log(preorderTraversal(toBTree([])));

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