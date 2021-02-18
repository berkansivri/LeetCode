/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
  return helper([], [], nums, 0)
};

const helper = (res, list, nums, index) => {
  if(list.length > 1) res.push([...list])
  const unique = new Set()
  
  for (let i = index; i < nums.length; i++) {
    if(nums[i] < nums[index - 1]) continue

    if(unique.has(nums[i])) continue
    unique.add(nums[i])
    
    list.push(nums[i])
    helper(res, list, nums, i+1)
    list.pop()
  }
  
  return res
}

console.log(findSubsequences([4,6,7,7]));