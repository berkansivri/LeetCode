/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
  let left = Math.max(A,E), right = Math.max(Math.min(C,G), left)
  let bottom = Math.max(B,F), top = Math.max(Math.min(D,H), bottom)

  return ((C-A)*(D-B)) + ((G-E)*(H-F)) - ((right-left) * (top-bottom))
};
