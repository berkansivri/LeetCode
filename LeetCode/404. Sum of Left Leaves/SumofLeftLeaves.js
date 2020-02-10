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

var sumOfLeftLeaves = function(root, isLeft) {
  if(!root) return 0
  if(!root.left && !root.right && isLeft)
    return root.val
  
  return sumOfLeftLeaves(root.left, true) + sumOfLeftLeaves(root.right, false)
}

var sumOfLeftLeaves2 = function(root) {
  if(!root) return 0
  let sum = 0
  const iter = (node, isLeft) => {
    if(!node) return
    if(isLeft && !node.left && !node.right) 
      sum += node.val
    iter(node.left, true)
    iter(node.right, false)
  }
  iter(root)
  return sum
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

console.log(sumOfLeftLeaves(
  toBTree(
    [0,2,4,1,null,3,-1,5,1,null,6,null,8]
    )
  )
);
console.log(sumOfLeftLeaves(
  toBTree(
      [3,9,20,null,null,15,7]
    )
  )
);
