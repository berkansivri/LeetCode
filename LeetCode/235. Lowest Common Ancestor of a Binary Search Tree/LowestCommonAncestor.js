/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (p.val < root.val && q.val < root.val)
    return lowestCommonAncestor(root.left, p, q)
  else if (p.val > root.val && q.val > root.val)
    return lowestCommonAncestor(root.right, p, q)
  else
    return root
}


console.log(lowestCommonAncestor(toBTree([2, null, 3]), 3, 2))
console.log(lowestCommonAncestor(toBTree([6,2,8,0,4,7,9,null,null,3,5]), 3, 5))

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
