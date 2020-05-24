/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
  if (preorder.length === 0) return null
  let root = new TreeNode(preorder[0])

  const insert = (node, val) => {
    if (!node) return new TreeNode(val)
    if (val < node.val) node.left = insert(node.left, val)
    else node.right = insert(node.right, val)
    return node
  }

  for (let i = 1; i < preorder.length; i++) {
    root = insert(root, preorder[i])
  }
  return root
}
