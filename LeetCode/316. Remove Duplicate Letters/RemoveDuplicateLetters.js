/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  const letterCount = {}
  const stack = []
  const inStack = {}

  for (let l of s) {
    letterCount[l] = letterCount[l] || 0
    letterCount[l]++
    inStack[l] = false
  }

  for (let l of s) {
    letterCount[l]--
    if (inStack[l]) continue

    let len = stack.length
    let stackTop = stack[--len]
    while (l < stackTop && letterCount[stackTop] > 0) {
      inStack[stack.pop()] = false
      stackTop = stack[--len]
    }

    inStack[l] = true
    stack.push(l)
  }
  return stack.join('')
}

console.log(removeDuplicateLetters('bcabc')) //abc
console.log(removeDuplicateLetters('cbacdcbc')) //acdb
