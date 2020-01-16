/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {string} s
 * @return {NestedInteger}
 */
var deserialize = function (s) {
  if (!s.startsWith('[')) return new NestedInteger(+s)
  let res = new NestedInteger()
  let stack = [res]
  let start = 1
  for (let i = 1; i < s.length; i++) {
    if (s[i] === '[') {
      let ni = new NestedInteger()
      stack[stack.length - 1].add(ni)
      stack.push(ni)
      start = i + 1
    } else if (s[i] === ',' || s[i] === ']') {
      if (i > start) {
        let ni = new NestedInteger()
        ni.setInteger(+s.slice(start, i))
        stack[stack.length - 1].add(ni)
      }
      start = i + 1
      if (s[i] === "]") stack.pop()
    }
  }
  return res
};