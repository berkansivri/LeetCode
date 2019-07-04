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
var isSymmetric = function(root) { 
  const check = (l, r) => {
    if (l && r) {
      if (l.val !== r.val) return false
    } else if (l || r) return false
    else return true
    return check(l.left, r.right) && check(l.right, r.left)
  }
  return root == null || check(root.left, root.right)
}

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

let a = new TreeNode(1)
a.left = new TreeNode(2)
a.right = new TreeNode(2)
a.left.left = new TreeNode(3)
a.left.right = new TreeNode(4)
a.right.left = new TreeNode(4)
a.right.right = new TreeNode(3)

console.log(isSymmetric(a))
