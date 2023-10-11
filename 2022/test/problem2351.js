/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let current;
    let mySet = new Set();
    
    for (let i = 0; i <= s.length - 1; i++) {
        current = s[i];
        
        if (!mySet.has(current)) {
            mySet.add(current);
        } else {
            i = s.length;
        }
    }
    
    return current;
};