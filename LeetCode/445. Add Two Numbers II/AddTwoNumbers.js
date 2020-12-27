/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let s1 = [],
    s2 = []

  while (l1) {
    s1.push(l1.val)
    l1 = l1.next
  }

  while (l2) {
    s2.push(l2.val)
    l2 = l2.next
  }

  let sum = 0
  let list = new ListNode(0)

  while (s1.length || s2.length) {
    if (s1.length) sum += s1.pop()
    if (s2.length) sum += s2.pop()
    list.val = sum % 10
    const carry = ~~(sum / 10)
    const head = new ListNode(carry)
    head.next = list
    list = head
    sum = carry
  }

  return list.val === 0 ? list.next : list
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

const a = new ListNode(7)
a.next = new ListNode(2)
a.next.next = new ListNode(4)
a.next.next.next = new ListNode(3)

const b = new ListNode(5)
b.next = new ListNode(6)
b.next.next = new ListNode(4)

addTwoNumbers(a, b)
