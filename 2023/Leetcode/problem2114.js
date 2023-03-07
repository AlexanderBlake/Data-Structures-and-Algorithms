/**
 * @param {string[]} sentences
 * @return {number}
 */

 // O(n)
var mostWordsFound = function(sentences) {
    // O(1) Constant Space
    let highest = 0;

    // O(n) Linear Time
    for (let i = 0; i < sentences.length; i++) {
        let current = 0;

        for (let j = 0; j < sentences[i].length; j++) {
            if (sentences[i][j] === " ") {
                current++;
            }
        }

        if (++current > highest) {
            highest = current;
        }
    }

    // O(1)
    return highest;
};