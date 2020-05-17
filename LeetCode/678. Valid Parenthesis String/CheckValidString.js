/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  let star = [],
    open = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') open.push(i)
    else if (s[i] === '*') star.push(i)
    else {
      if (open.length > 0) open.pop()
      else if (star.length > 0) star.pop()
      else return false
    }
  }
  for (let i of open) {
    let index = star.findIndex(x => x > i)
    if (index < 0) return false
    star.splice(index, 1)
  }
  return true
}

console.log(checkValidString('(*()'))
console.log(checkValidString('(())((())()()(*)(*()(())())())()()((()())((()))(*'))
console.log(checkValidString('(((******))'))
console.log(checkValidString(')'))
console.log(checkValidString('(*)'))
console.log(checkValidString('()'))
console.log(checkValidString('(*))'))
