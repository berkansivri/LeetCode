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
var reverseList2 = function (head) {
  var tmp = null
  var newHead = null
  while (head !== null) {
    tmp = head
    head = head.next
    tmp.next = newHead
    newHead = tmp
  }

  return newHead
}

var reverseList = function (head) {
  let [prev, current] = [null, head]
  while (current) {
    ;[current.next, prev, current] = [prev, current, current.next]
  }
  return prev
}

function ListNode(val) {
  this.val = val
  this.next = null
}

function toLinkedList(arr) {
  let node = new ListNode()
  let root = node
  while (arr.length) {
    root = root.next = new ListNode()
    root.val = arr.shift()
  }
  return node.next
}

console.log(reverseList(toLinkedList([1, 2, 3, 4, 5])))
