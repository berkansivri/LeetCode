/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */

//1
var numJewelsInStones = function(J, S) {
  let chars = new Set(J)
  return [...S].filter(x => chars.has(x)).length
};

//2
var numJewelsInStones = function(J, S) {
  let map = J.split("").reduce((a,c) => (a[c] = true, a), {})
  return S.split('').filter(x => map[x]).length
};

console.log(numJewelsInStones("aA", "aAAbbbb"));
console.log(numJewelsInStones("z", "ZZ"));