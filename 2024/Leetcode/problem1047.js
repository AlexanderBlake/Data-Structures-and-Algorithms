/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let resultArr = [s[0]];

    for (let i = 1; i < s.length; i++){
        resultArr.push(s[i]);

        if (resultArr.length >= 2 && resultArr[resultArr.length - 1] === resultArr[resultArr.length - 2])
        {
            resultArr.pop();
            resultArr.pop();
        }
    }
    let resultString = resultArr.join("");

    return resultString;
};