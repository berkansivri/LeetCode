/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  const isSame = (p, q) => {
    if (p && q) {
      if (p.val !== q.val) return false
    } else if (p || q) return false
    else return true
    return isSame(p.left, q.left) && isSame(p.right, q.right)
  }
  return isSame(p, q)
}

let a = new TreeNode(1)
a.left = new TreeNode(2)
// a.right = new TreeNode(3)

let b = new TreeNode(1)
// b.left = new TreeNode(2)
b.right = new TreeNode(3)

console.log(isSameTree(a, b))

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}
