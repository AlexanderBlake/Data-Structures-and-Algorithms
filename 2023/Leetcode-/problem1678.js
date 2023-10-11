/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    // Time Complexity: O(n) Linear Time
    // Space Complexity: O(n) Linear Space
    let result = "";
    let i = 0;
    while (i < command.length) {
        if (command[i] == "G") {
            result += command[i];
            i++;
        } else if (command[i] == "(") {
            if (command[i + 1] == ")") {
                result += "o";
                i += 2;
            } else {
                result += "al";
                i += 4;
            }
        }
    }
    return result;
};