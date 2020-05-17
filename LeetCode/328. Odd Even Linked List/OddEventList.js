/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  let stack = [],
    node = head
  while (node) {
    stack.push(node.next)
    if (node.next) {
      node.next = node.next.next
      node = node.next || node
    } else break
  }
  while (stack.length) {
    node.next = stack.shift()
    node = node.next
  }
  return head
}

function ListNode(val) {
  this.val = val
  this.next = null
}

const toListNode = arr => {
  let res = new ListNode()
  let temp = res
  while (arr.length) {
    temp.next = new ListNode(arr.shift())
    temp = temp.next
  }
  return res.next
}

console.log(oddEvenList(toListNode([1, 2, 3, 4, 5, 6, 7, 8])))
console.log(oddEvenList(toListNode([1, 2, 3, 4, 5, 6, 7])))
