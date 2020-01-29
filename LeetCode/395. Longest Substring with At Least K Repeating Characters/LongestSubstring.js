/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
  let chars = {}, max = 0
  s.split('').forEach(c => chars[c] = (chars[c] || 0) + 1)
  let invalid = Object.entries(chars).filter(([char, count]) => count < k)
  
  if(invalid[0]) {
    for(let seg of s.split(invalid.shift()[0])) {
      max = Math.max(longestSubstring(seg, k), max)
    }
    return max
  }
  return s.length
};

console.log(longestSubstring("ababbc", 2));
console.log(longestSubstring("aaabb", 3));
