/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  let res = root
  while (root && root.left) {
    let next = root.left
    while (root) {
      if (root.left) root.left.next = setLeft(root)
      if (root.right) root.right.next = setRight(root)
      root = root.next
    }
    root = next
  }
  return res
}

function setLeft(node) {
  if (node.right) return node.right
  else if (root.next) {
    if (root.next.left) return root.next.left
    else if (root.next.right) return root.next.right
  } else return null
}
function setRight(node) {
  if (node.next) {
    if (node.next.left) return node.next.left
    else if (node.next.right) return node.next.right
  } else return null
}

function Node(val, left, right, next) {
  this.val = val
  this.left = left
  this.right = right
  this.next = next
}

console.log(
  connect({
    $id: '1',
    left: {
      $id: '2',
      left: { $id: '3', left: null, next: null, right: null, val: 4 },
      next: null,
      right: { $id: '4', left: null, next: null, right: null, val: 5 },
      val: 2
    },
    next: null,
    right: {
      $id: '5',
      left: null,
      next: null,
      right: { $id: '6', left: null, next: null, right: null, val: 7 },
      val: 3
    },
    val: 1
  })
)
