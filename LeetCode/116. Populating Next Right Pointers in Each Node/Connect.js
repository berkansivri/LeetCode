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
var connect = function(root) {
  let res = root
  while (root && root.left) {
    let next = root.left
    while (root) {
      root.left.next = root.right
      root.right.next = root.next ? root.next.left : root.next
      root = root.next
    }
    root = next
  }
  return res
}

function Node(val, left, right, next) {
  this.val = val
  this.left = left
  this.right = right
  this.next = next
}

console.log(
  connect({
    $id: "1",
    left: {
      $id: "2",
      left: { $id: "3", left: null, next: null, right: null, val: 4 },
      next: null,
      right: { $id: "4", left: null, next: null, right: null, val: 5 },
      val: 2
    },
    next: null,
    right: {
      $id: "5",
      left: { $id: "6", left: null, next: null, right: null, val: 6 },
      next: null,
      right: { $id: "7", left: null, next: null, right: null, val: 7 },
      val: 3
    },
    val: 1
  })
)
