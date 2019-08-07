/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  let v1 = version1.split(".")
  let v2 = version2.split(".")

  while(v1.length || v2.length){
    let a = +v1.shift() || 0
    let b = +v2.shift() || 0
    if(a>b) return 1
    else if(b>a) return -1
  }
  return 0
};

console.log(compareVersion("0.1", "1.1"));
console.log(compareVersion("1.0.1", "1"));
console.log(compareVersion("7.5.2.4", "7.5.3"));
console.log(compareVersion("1.01", "1.001"));
console.log(compareVersion("1.0", "1.0.0"));