/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function (preorder) {
  const stack = []
  for (let s of preorder.split(',')) {
    if (s === '#') {
      if (stack[stack.length - 1] === '#') {
        while (stack[stack.length - 1] === '#' && stack.length > 0) {
          stack.pop()
          if (stack.length > 0) stack.pop()
          else return false
        }
      }
      stack.push(s)
    } else stack.push(s)
  }
  const len = stack.length
  return len === 1 && stack[len - 1] === '#'
}

console.log(isValidSerialization('9,3,4,#,#,1,#,#,2,#,6,#,#'))
console.log(isValidSerialization('1, #'))
console.log(isValidSerialization('9, #, #, 1'))
