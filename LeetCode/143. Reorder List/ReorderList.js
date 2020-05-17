/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  let stack = [],
    node = head
  if (!node) return
  while (node) {
    stack.push(node)
    node = node.next
  }

  let len = stack.length
  node = head
  for (let i = 0; i < len; i++) {
    if (i % 2 === 0) node.next = stack.shift()
    else node.next = stack.pop()
    node = node.next
  }
  node.next = null
}

// 1,2,3,4,5
// 1,5,2,4,3
let a = new ListNode(1)
a.next = new ListNode(2)
a.next.next = new ListNode(3)
a.next.next.next = new ListNode(4)
a.next.next.next.next = new ListNode(5)

console.log(reorderList(a))

function ListNode(val) {
  this.val = val
  this.next = null
}
