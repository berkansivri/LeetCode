/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const map = s.split('').reduce((a,c,i) => {
    a[c] = a[c] === undefined ? i : null
    return a
  }, {})
  let vals = Object.values(map).filter(x => x !== null)
  return vals.length ? vals[0] : -1
};