/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
  let w = parseInt(Math.sqrt(area))

  while(!Number.isInteger(area/w)) w--

  return [area/w, w]
};

console.log(constructRectangle(37)); // [37,1]
console.log(constructRectangle(4)); // [2,2]
console.log(constructRectangle(122122)); // [427,286]