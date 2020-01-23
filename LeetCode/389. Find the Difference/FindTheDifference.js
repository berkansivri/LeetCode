/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */

var findTheDifference = function(s, t) {
  let sum = 0
  for (var i = 0; i < s.length; i++) {
    sum ^= s[i].charCodeAt() ^ t[i].charCodeAt()
  }
  sum ^= t[i].charCodeAt()
  return String.fromCharCode(sum)
}
 
var findTheDifference2 = function(s, t) {
  let sum = 0
  for(let c of t) {
    sum += c.charCodeAt()
  }
  for(let c of s) {
    sum -= c.charCodeAt()
  }
  return String.fromCharCode(sum)
}

var findTheDifference3 = function(s, t) {
  const chars = {}
  for(let c of s) {
    chars[c] = (chars[c] || 0) + 1
  }
  for(let c of t) {
    if(!chars[c]) return c
    chars[c]--
  }
};

console.log(findTheDifference("abcd", "abcde"));
