/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function(height) {
  const n = height.length;
  let result = 0,
    i = 0,
    j = n - 1,
    min = 0;
  while (i < j) {
    if (height[i] <= min) {
      result += min - height[i];
      i++;
    } else if (height[j] <= min) {
      result += min - height[j];
      j--;
    } else {
      min = Math.min(height[i], height[j]);
    }
  }
  return result;
};
