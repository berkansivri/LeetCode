/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
var mergeTwoLists = function(l1, l2) {
  var arr = [...convertToArray(l1), ...convertToArray(l2)].sort( (a, b) => a - b );

  var temp = new ListNode();
  var result = temp;
  for (let i = 0; i < arr.length; i++) {
    temp.next = new ListNode(arr[i]);
    temp = temp.next;
  }
  return result.next;
};

var convertToArray = function(ln) {
  var arr = [];
  while (ln && ln.val != undefined) {
    arr.push(ln.val);
    ln = ln.next;
  }
  return arr;
};