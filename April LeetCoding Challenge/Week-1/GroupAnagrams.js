/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let groups = [],
    arr = []
  for (let i = 0; i < strs.length; i++) {
    arr = [strs[i]]
    let s1 = strs[i].split('').sort().join()
    for (let j = i + 1; j < strs.length; j++) {
      if (strs[j].length === strs[i].length) {
        let s2 = strs[j].split('').sort().join()
        if (s1 === s2) {
          arr.push(strs[j])
          strs.splice(j, 1)
          j--
        }
      }
    }
    groups.push(arr)
  }
  return groups
}
