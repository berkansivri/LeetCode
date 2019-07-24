/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let i = 0, j = gas.length, c = 0, sum = 0
  while (i !== j) {
    sum += gas[c] - cost[c]
    if (sum >= 0) {
      i++
      c = i
    } else {
      j--
      c = j
    }
  }
  return sum >= 0 ? j % gas.length : -1
};


var canCompleteCircuit2 = function (gas, cost) {
  for (let i = 0; i < gas.length; i++) {
    if (gas[i] >= cost[i]) {
      let tank = gas[i]
      j = i
      do {
        tank -= cost[j]
        j = (j + 1) % gas.length
        tank += gas[j]
        if (j === i) return i
      } while (tank >= cost[j])
    }
  }
  return -1
};

console.log(canCompleteCircuit([1, 2, 3, 4, 5], 
                               [3, 4, 5, 1, 2]));
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3]));