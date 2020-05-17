/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let cur = head
  const iter = node => {
    if (!node) return true
    const res = iter(node.next) && cur.val === node.val
    cur = cur.next
    return res
  }
  return iter(head)
}

function ListNode(val) {
  this.val = val
  this.next = null
}

let temp = new ListNode(1)
temp.next = new ListNode(2)
temp.next.next = new ListNode(2)
temp.next.next.next = new ListNode(1)
console.log(isPalindrome(temp))
