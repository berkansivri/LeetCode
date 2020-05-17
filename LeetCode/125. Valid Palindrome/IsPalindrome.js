/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  return (
    s
      .replace(/[^A-Za-z0-9]/g, '')
      .toLocaleLowerCase()
      .split('')
      .reverse()
      .join('') === s.toLocaleLowerCase().replace(/[^A-Za-z0-9]/g, '')
  )
}

console.log(isPalindrome('A man, a plan, a canal: Panama'))
console.log(isPalindrome(''))
console.log(isPalindrome('race a car'))
