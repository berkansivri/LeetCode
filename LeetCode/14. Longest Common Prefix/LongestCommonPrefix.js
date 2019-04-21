/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  var result = "";
  var j = 0;
  var i = 0;
  if (strs.length === 1 && strs[0].length > 0) {
    result = strs[0][0];
  } else if (strs.length > 1) {
    while (true) {
      if (strs[i][j] === strs[i + 1][j]) {
        i++;
        if (i === strs.length - 1) {
          result += strs[i][j] || "";
          i = 0;
          j++;
          if (!strs.every(x => { return x.length > j })) {
            break;
          }
        }
      } else {
        break;
      }
    }
  }
  return result;
};