/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
  let map = {}, res = 0
  arr.sort((a,b) => a - b)
  for(let n of arr) {
    if(map[n-1] && !map[n]) res += map[n-1]
    map[n] = (map[n] || 0) + 1
  }
  return res
};

console.log(countElements([4,10,11,11,1,9,6,2,4,5,8]));
console.log(countElements([1,1,2,2]));
console.log(countElements([1,2,3]));
console.log(countElements([1,1,3,3,5,5,7,7]));
console.log(countElements([1,3,2,3,5,0]));