/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  intervals.push(newInterval);
  intervals.sort((a, b) => a[1] - b[1]);
  
  return loop(intervals);
};
var loop = function(intervals) {
  for (let i = 0; i < intervals.length - 1; i++) {
    if (
      (intervals[i][1] <= intervals[i + 1][1] && intervals[i][1] >= intervals[i + 1][0]) ||
      (intervals[i + 1][1] <= intervals[i][1] && intervals[i + 1][1] >= intervals[i][0])
    ) {
      let min = Math.min(intervals[i][0], intervals[i + 1][0]);
      let max = Math.max(intervals[i][1], intervals[i + 1][1]);
      intervals.splice(i, 2, [min, max]);
      loop(intervals);
    }
  }
  return intervals;
}
