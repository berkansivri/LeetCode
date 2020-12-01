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

var sortList = function (head) {
  if (!head || !head.next) return head

  let fast = head,
    slow = head

  while (fast.next && fast.next.next) {
    fast = fast.next.next
    slow = slow.next
  }
  let middle = slow.next
  slow.next = null
  return merge(sortList(head), sortList(middle))
}

const merge = (o, t) => {
  let dummy = new ListNode(-1) //dummy
  let temp = dummy
  while (o && t) {
    if (o.val < t.val) {
      temp.next = o
      o = o.next
    } else {
      temp.next = t
      t = t.next
    }
    temp = temp.next
  }
  temp.next = o || t
  return dummy.next
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}
