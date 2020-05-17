/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums) {
  const result = []
  function iter(used) {
    if (used.length === nums.length) result.push([...used])
    else {
      for (let num of nums) {
        if (!used.includes(num)) {
          used.push(num)
          iter(used)
          used.pop(num)
        }
      }
    }
  }
  iter([])
  return result
}
