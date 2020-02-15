/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  if (s.length === 1) return 1
  const chars = s.split('').reduce((a, c) => {
    a[c] = (a[c] || 0) + 1
    return a
  }, {})
  
  let len = 0, odd = 0
  for(let c of Object.values(chars)) {
    if(c % 2 === 0) len += c
    else {
      len += c - 1
      odd = 1
    }
  }
  return len + odd
};

console.log(longestPalindrome("ababababa"));
console.log(longestPalindrome("abccccdd"));
console.log(longestPalindrome("tattarrattat"));
console.log(longestPalindrome("ccca"));
console.log(longestPalindrome("bba"));
console.log(longestPalindrome("aasdqwwwqe"));