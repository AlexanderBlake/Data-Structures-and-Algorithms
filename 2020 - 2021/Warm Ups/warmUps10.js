function caesarEncrypt(plainText, key)
{
    let result = "";

    for (let i = 0; i < plainText.length; i++)
    {
        let encryptCode = ((plainText.charCodeAt(i) + key) - 65) % 26 + 65;
        let encryptLetter = String.fromCharCode(encryptCode);
        result += encryptLetter;
    }
    return result;
}

function vigenereEncrypt(plainText, key)
{
    return plainText;
}

function main()
{
    console.log(caesarEncrypt("ABCDEF", 3));
    console.log(caesarEncrypt("QRSTUVWXYZ", 3));
}

main();
