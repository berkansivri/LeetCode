/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let i = 0, j = 0, lens = s.length, lent = t.length
  if(lens === 0) return true
  while(j < lent) {
    if(s[i] === t[j]) {
      i++
      if(i === lens) return true
    }
    j++
  }
  return false
};

console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));
console.log(isSubsequence("", "ahbgdc")); //try2