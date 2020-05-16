/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  if (!head) return head
  let odd = head,
    even = head.next
  while (odd.next && odd.next.next) {
    let tmp = odd.next
    odd.next = odd.next.next
    odd = odd.next
    tmp.next = odd.next
  }
  odd.next = even
  return head
}

console.log(oddEvenList(toListNode([1, 2, 3, 4, 5, 6, 7, 8]))) // 1->3->5->2->4->NULL
console.log(oddEvenList(toListNode([1, 2, 3, 4, 5]))) // 1->3->5->2->4->NULL
console.log(oddEvenList(toListNode([2, 1, 3, 5, 6, 4, 7]))) // 2->3->6->7->1->5->4->NULL

function ListNode(val) {
  this.val = val
  this.next = null
}

function toListNode(arr) {
  let node = new ListNode()
  let head = node
  for (let v of arr) {
    node.next = new ListNode(v)
    node = node.next
  }
  return head.next
}
