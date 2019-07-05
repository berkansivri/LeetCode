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
var buildTree = function(inorder, postorder) {
  const len = postorder.length
  while (postorder.length) {
    let root = new TreeNode(postorder[len - 1])
    let index = inorder.indexOf(root.val)
    root.left = buildTree(inorder.slice(0, index), postorder.slice(0, index))
    root.right = buildTree(inorder.slice(index + 1, len), postorder.slice(index, len - 1))
    return root
  }
  return null
}

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

var inorderTraversal = function(root) {
  if (root == null) return []
  let result = []
  let stack = []
  let pointerNode = root
  while (stack.length !== 0 || pointerNode !== null) {
    if (pointerNode !== null) {
      stack.push(pointerNode)
      pointerNode = pointerNode.left
    } else {
      pointerNode = stack.pop()
      result.push(pointerNode.val)
      pointerNode = pointerNode.right
    }
  }
  return result
}

var postorderTraversal = function(root) {
  if (root == null) return []
  let stack = []
  let result = []
  stack.push(root)
  while (stack.length !== 0) {
    let pointer = stack.pop()
    result.unshift(pointer.val)
    if (pointer.left) {
      stack.push(pointer.left)
    }
    if (pointer.right) {
      stack.push(pointer.right)
    }
  }
  return result
}

let tree = buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3])
console.log(inorderTraversal(tree).join(","))
console.log(postorderTraversal(tree).join(","))
