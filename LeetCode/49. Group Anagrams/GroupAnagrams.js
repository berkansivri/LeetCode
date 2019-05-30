/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) { 
  var arr = [], groups = [], s2 = "", s1 = ""
  for (let i = 0; i < strs.length; i++) {
      arr = [strs[i]]
      s2 = strs[i].split("").sort().join("")
      for (let j = i + 1; j < strs.length; j++) {
        if (strs[i].length === strs[j].length) {
          s1 = strs[j].split("").sort().join("")
          if (s2 === s1) {
            arr.push(strs[j])
            strs.splice(j,1)
            j--
          } 
        }
      }
      groups.push(arr)
  }
  return groups
}