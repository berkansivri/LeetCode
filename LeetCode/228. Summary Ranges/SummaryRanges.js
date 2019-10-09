/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums, left = nums[0]) {
  return nums.reduce((p,c,i) =>((c+1 !== nums[i+1] ? p.push(left === c ? '' + c : `${left}->${c}`) : '') && (left = nums[i+1]), p), [])
};


var summaryRanges2 = function(nums) {
  if(nums.length === 1) return nums.map(String)
  temp = nums[0]
  return nums.reduce((p,c,i) => {
    if(i === nums.length - 1) {
      if(c - nums[i-1] === 1) {
        p.push(`${temp}->${c}`)
      } else {
        temp !== nums[i-1] ? p.push(`${temp}->${nums[i-1]}`) : p.push(`${temp}`)
        p.push(`${c}`)
      }
    }
    else if(i > 0 && (c-nums[i-1] !== 1) ) {
      temp !== nums[i-1] ? p.push(`${temp}->${nums[i-1]}`) : p.push(`${temp}`)
      temp = c
    }
    return p
  }, [])
};

console.log(summaryRanges([0,1,2,4,5,7]));
console.log(summaryRanges([1,3]));
console.log(summaryRanges([0]));
console.log(summaryRanges([0,2,3,4,6,8,9]));
console.log(summaryRanges([]));
console.log(summaryRanges([0,1]));
console.log(summaryRanges([0,1,2,4,5,6]));
