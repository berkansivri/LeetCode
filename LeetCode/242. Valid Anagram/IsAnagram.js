/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if(s.length !== t.length) return false
  let map = {}
  for(let l of s) {
    map[l] = ++map[l] || 1
  }
  for(let l of t) {
    if(map[l] > 0) 
      map[l]--
    else return false
  }
  return true
};

console.log(isAnagram("aacc", "ccac"));
console.log(isAnagram("anagram", "nagaram"));
