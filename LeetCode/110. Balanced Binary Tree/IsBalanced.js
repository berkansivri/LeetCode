/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  if(!root) return true;
  const depth = (node) => {
    if(!node) return 0
    if(!node.left && !node.right) return 1;
    return Math.max(depth(node.left), depth(node.right)) + 1
  }

  let left = depth(root.left)
  let right = depth(root.right)
  return Math.abs(left-right) <= 1 && isBalanced(root.left) && isBalanced(root.right)
}
 
console.log(isBalanced(toBTree([1,2,2,3,null,null,3,4,null,null,4]))) 

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
