/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let result = 0;
    
    for (let i = 0; i < operations.length; i++) {
        if (operations[i][1] === '+') {
            result++;
        } else {
            result--;
        }
        /*
        switch (operations[i][1]) {
            case '+': {
                result++;
                break;
            }
            default: {
                result--;
            }
        }
        */
    }
    
    return result;
};