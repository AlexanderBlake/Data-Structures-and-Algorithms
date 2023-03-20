/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    if (sentence.length < 26) {
        return false;
    }

    let alphabet = new Set();
    for (let i = 0; i < sentence.length; i++) {
        if (!alphabet.has(sentence[i])) {
            alphabet.add(sentence[i]);
        }
    }

    return alphabet.size === 26;
/*
    let alphabet = [];
    for (let i = 97; i <= 122; i++) {
        alphabet.push(String.fromCharCode(i));
    }
    console.log(alphabet);

    // O (26 * n)
    for (let i = 0; i < sentence.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (alphabet[j] == sentence[i]) {
                alphabet.splice(j, 1);
                break;
            }
        }
    }

    return alphabet.length == 0;
    */
};