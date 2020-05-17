/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let temp = head,
    node = new ListNode()
  let result = node
  while (head) {
    if (head.val < x) {
      node.next = new ListNode(head.val)
      node = node.next
    }
    head = head.next
  }
  head = temp
  while (head) {
    if (head.val >= x) {
      node.next = new ListNode(head.val)
      node = node.next
    }
    head = head.next
  }
  return result.next
}

function ListNode(val) {
  this.val = val
  this.next = null
}

function toArray(ln) {
  const arr = []
  while (ln && ln.val != undefined) {
    arr.push(ln.val)
    ln = ln.next
  }
  return arr
}

function toList(array) {
  const head = new ListNode()
  let node = head
  for (let a of array) {
    node.next = new ListNode(a)
    node = node.next
  }
  return head.next
}

console.log(partition(toList([1, 4, 3, 2, 5, 2]), 3))

// Input: head = 1->4->3->2->5->2, x = 3
// Output: 1->2->2->4->3->5
