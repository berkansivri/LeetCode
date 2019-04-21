// runtime: %100
// memory: %70

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var opens = ["(", "{", "["];
  var closes = [")", "}", "]"];

  var arr = [];
  for (let i = 0; i < s.length; i++) {
    if (opens.includes(s[i])) arr.push(s[i]);
    else if (s[i] !== closes[opens.indexOf(arr.pop())]) return false;
  }
  return arr.length === 0;
};