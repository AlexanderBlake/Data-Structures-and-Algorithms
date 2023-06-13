/**
 * @param {string} s
 * @return {number}
 */

 /*
 Time Complexity: O(n) Linear Time
 Space Complexity: O(1) Constant Space
 */
var countAsterisks = function(s) {
    let count = 0;
    let shouldCount = true;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '|') {
            shouldCount = !shouldCount;
        } else if (s[i] === '*' && shouldCount) {
            count++;
        }
    }

    return count;
};