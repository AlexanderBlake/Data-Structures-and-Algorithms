/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    let dictionary = {};

    let count = 0;
    for (let i = 0; i < key.length; i++) {
        if (key[i] != ' ' && dictionary[key[i]] === undefined) {
            dictionary[key[i]] = String.fromCharCode(97 + count++);
        }
    }

    let newMessage = "";
    for (let i = 0; i < message.length; i++) {
        if (message[i] != ' ') {
            newMessage += dictionary[message[i]];
        } else {
            newMessage += " ";
        }
    }

    return newMessage;
};