/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    let keyCom = [];
    let alph = [];
    
    let index = 0;
    for (let i = 0; i < key.length; i++) {
        if (key[i] !== ' ' && keyCom.indexOf(key[i]) == -1) {
            alph[index] = String.fromCharCode(97 + index);
            keyCom[index++] = key[i];   
        }
    }
    
    result = "";
    for (let i = 0; i < message.length; i++) {
        if (message[i] !== ' ') {
            result += alph[keyCom.indexOf(message[i])];
        } else {
            result += " ";
        }
    }
    return result;
};