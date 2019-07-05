/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  while (inorder.length) {
    let root = new TreeNode(preorder[0])
    let index = inorder.indexOf(root.val)
    root.left = buildTree(preorder.slice(1), inorder.slice(0, index))
    root.right = buildTree(preorder.slice(index+1), inorder.slice(index + 1))
    return root
  }
  return null
}

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]))
