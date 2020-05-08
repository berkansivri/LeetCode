/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
  if(coordinates.length === 2) return true
  let slope = (coordinates[1][1] - coordinates[0][1])/(coordinates[1][0] - coordinates[0][0])
  for (let i = 2; i < coordinates.length; i++) {
    let s = (coordinates[i][1] - coordinates[i-1][1]) / (coordinates[i][0] - coordinates[i-1][0])
    if(s !== slope)
      return false
  }
  return true
};

console.log(checkStraightLine([[-7,-3],[-7,-1],[-2,-2],[0,-8],[2,-2],[5,-6],[5,-5],[1,7]]));
console.log(checkStraightLine([[-3,-2],[-1,-2],[2,-2],[-2,-2],[0,-2]]));
console.log(checkStraightLine([[1,2],[3,6]]));
console.log(checkStraightLine([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]));
console.log(checkStraightLine([[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]));