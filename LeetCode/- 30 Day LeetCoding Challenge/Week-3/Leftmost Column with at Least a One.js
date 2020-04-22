/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} x, y
 *     @return {integer}
 *     this.get = function(x, y) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
var leftMostColumnWithOne = function (binaryMatrix) {
  const [m, n] = binaryMatrix.dimensions();
  
  let res = 101
  for (let i = 0; i < m; i++) {
    for (let j = Math.min(n - 1, res - 1); j >= 0; j--) {
      if(binaryMatrix.get(i, j) === 0) break
      res = j
    }
  }
  return res === 101 ? -1 : res
};