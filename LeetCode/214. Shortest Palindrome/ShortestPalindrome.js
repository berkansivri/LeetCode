/**
 * @param {string} s
 * @return {string}
 */

// **TIME LIMIT EXCEEDED**
var shortestPalindrome = function (s) {
  let removed = '',
    arr = s.split('')
  // while(JSON.stringify(arr) != JSON.stringify([...arr].reverse())){
  while (!isPalindrome(arr.join(''))) {
    removed += arr.pop()
  }
  return removed + s
}

function isPalindrome(s, i) {
  return (i = i || 0) < 0 || i >= s.length >> 1 || (s[i] == s[s.length - 1 - i] && isPalindrome(s, ++i))
}

console.log(shortestPalindrome('aabcaaa'))
console.log(shortestPalindrome('abcd'))
console.log(shortestPalindrome('aacecaaa'))
