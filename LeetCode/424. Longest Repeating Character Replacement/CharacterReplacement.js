/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  let left = 0, max = 0, mostFreq = 0;
  let freqHash = {};
  
  for (let right=0;right<s.length;right++) {
      freqHash[s[right]] = freqHash[s[right]] + 1 || 1;
      mostFreq = Math.max(mostFreq, freqHash[s[right]]);
      while(right - left + 1 - mostFreq > k) {
          freqHash[s[left++]]--;
      }
      max = Math.max(max, right - left + 1);
  }
  
  return max;    
};

console.log(characterReplacement("ABAB", 2));
console.log(characterReplacement("AABABBA", 1));