/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  let arr = convertToArray(head)
  let len = arr.length,
    temp,
    temp2
  for (let i = 0; i < k % len; i++) {
    for (let j = 0; j < len; j++) {
      if (j === 0) {
        temp = arr[j]
        arr[j] = arr[arr.length - 1]
      } else {
        temp2 = arr[j]
        arr[j] = temp
        temp = temp2
      }
    }
  }
  return toList(arr)
}

function ListNode(val) {
  this.val = val
  this.next = null
}

function convertToArray(ln) {
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

console.log(rotateRight(toList([1, 2, 3, 4, 5]), 2))
