function infiniteLoop()
{
    /*
    while (true)
    {
        continue;
    }
    */

    /*
    do
    {
        continue;
    } while(true);
    */

    for (false; true; false)
    {
        console.log("Help!");
        continue;
    }
}

function toBinary(n)
{

}

function isPrime(n)
{
    if (n <= 1)
    {
        return false;
    }
    else if (n <= 3)
    {
        return true;
    }
    else
    {
        for (let i = 2; i < n; i++)
        {
            if (n % i === 0)
            {
                return false;
            }
        }
        return true;
    }   
}

function swap(a, b)
{
    let temp = a;
    a = b;
    b = temp;
}

function stackOverflow(i)
{
    console.log(i)
    stackOverflow(++i);
}

// Write a function that makes the most money buying and selling stocks knowing what the prices will be for the week
// Long positions only, no short selling
// No commissions, unlimited capital, you can only own 1 share at most, unlimited amount of trades
// You must close all positions by the weekend
// Return the max profit (loss)
// Time Complexity: O(n)
function stocks(prices)
{
    if (prices.length === 0 || prices[prices.length - 1] <= 0)
    {
        return -1;
    }

    let diff;
    let profit = 0;
    for (let i = 0; i < prices.length - 1; i++)
    {
        if (prices[i] <= 0)
        {
            return -1;
        }

        diff = prices[i + 1] - prices[i];

        if (diff > 0)
        {
            profit += diff;
        }
    }

    return profit;
}

// fromCharCode() Ex. String.fromCharCode(65) === "A";
// charCodeAt()  Ex. 'A'.charCodeAt(0) === 65;
// 27 / 4 = 6 R 3
// 27 % 4 = 3
// Time Complexity: O(n) Linear Time
function caesarCipher(text, key, decrypt)
{
    let resultText = "";

    key = key % 26;

    if (decrypt)
    {
        key *= -1;
    }

    for (let i = 0; i < text.length; i++)
    {
        let asciiVal = text.charCodeAt(i);

        if (asciiVal >= 65 && asciiVal <= 90)
        {
            resultText += String.fromCharCode(65 + (((asciiVal - 65) + key) % 26));

            /*
            asciiVal = asciiVal + key;

            while (asciiVal > 90)
            {
                asciiVal -= 26;
            }
            resultText += String.fromCharCode(asciiVal);
            */
        }
        else if (asciiVal >= 97 && asciiVal <= 122)
        {
            resultText += String.fromCharCode(97 + (((asciiVal - 97) + key) % 26));
        }
        else
        {
            resultText += text[i];
        }   
    }

    return resultText;
}

function vigenereCipher(text, key, decrypt)
{
    let resultText = "";
    let keyIter = 0;

    /*
    for (let i = 0; i < text.length; i++)
    {
        let asciiVal = text.charCodeAt(i);
        let asciiKey = key.charCodeAt(keyIter % key.length) - 65;
        let base = asciiVal < 97 ? 65 : 97;

        if (asciiVal >= base && asciiVal <= base + 26)
        {
            keyIter++;
            resultText += caesarCipher(text[i], asciiKey, decrypt);
        }
        else
        {
            resultText += text[i];
        }  
    }
    */

    for (let i = 0; i < text.length; i++)
    {
        let asciiVal = text.charCodeAt(i);
        let base = asciiVal < 97 ? 65 : 97;
        let asciiKey = key.charCodeAt(keyIter % key.length) - 65;

        if (decrypt)
        {
            asciiKey *= -1;
        }
        
        if (asciiVal >= base && asciiVal <= base + 26)
        {
            keyIter++

            resultASCII = (((asciiVal - base) + asciiKey) % 26);

            if (resultASCII < 0)
            {
                resultASCII = 26 + resultASCII;
                resultText += String.fromCharCode(resultASCII + base);
            }
            else
            {
                resultText += String.fromCharCode(base + (((asciiVal - base) + asciiKey) % 26));
            }
        }
        else
        {
            resultText += text[i];
        }   
    }

    return resultText;
}

function caesarCipherTests()
{
    let result = caesarCipher("Agent 007, ATTACK AT DAWN!", 1, false);
    console.assert(result === "Bhfou 007, BUUBDL BU EBXO!", "Encrpytion; key = 1: " + result);

    result = caesarCipher("Zzz", 1, false);
    console.assert(result === "Aaa", "Encrpytion; key = 1 " + result);

    result = caesarCipher("Agent 007, ATTACK AT DAWN!", 27, false);
    console.assert(result === "Bhfou 007, BUUBDL BU EBXO!", "Encrpytion; key = 27 " + result);

    result = caesarCipher("Bhfou 007, BUUBDL BU EBXO!", 1, true);
    console.assert(result === "Agent 007, ATTACK AT DAWN!", "Decryption; key = 1 " + result);

    result = caesarCipher("Bhfou 007, BUUBDL BU EBXO!", 27, true);
    console.assert(result === "Agent 007, ATTACK AT DAWN!", "Decryption; key = 27 " + result);
}

function vigenereCipherTests()
{
    let result = vigenereCipher("ATTACK", "SECRET", false);
    console.assert(result === "SXVRGD", "Encrpytion; key = 1: " + result);

    result = vigenereCipher("Agent 007, ATTACK AT DAWN!", "SECRET", false);
    console.assert(result === "Skgex 007, TLXCTO TL HCNR!", "Encrpytion; key = 27 " + result);

    result = vigenereCipher("SXVRGD", "SECRET", true);
    console.assert(result === "ATTACK", "Decryption; key = 1 " + result);

    result = vigenereCipher("Skgex 007, TLXCTO TL HCNR!", "SECRET", true);
    console.assert(result === "Agent 007, ATTACK AT DAWN!", "Decryption; key = 27 " + result);
}

function stocksTests()
{
    console.assert(stocks([]) === -1, "Empty list");
    console.assert(stocks([0, 0, 0, 0, 0]) === -1, "All zeros");
    console.assert(stocks([2, -1, 1, 2, 3]) === -1, "One negative value");
    console.assert(stocks([2, 3, 0, 4, 5]) === -1, "One zero value");

    console.assert(stocks([1, 1, 1, 1, 1]) === 0, "All the same value");
    console.assert(stocks([100, 80, 60, 40, 20]) === 0, "Decreasing");

    console.assert(stocks([100, 1, 100, 1, 100]) === 198, "Oscillating");
    console.assert(stocks([20, 40, 60, 80, 100]) === 80, "Increasing");
    console.assert(stocks([20, 32, 10, 8, 76]) === 80, "Random");
    console.assert(stocks([20, 32, 10, 8, 7]) === 12, "Random 2");
}

function toBinaryTests()
{
    console.assert(toBinary("0") === "0", 0);
    console.assert(toBinary("1") === "1", 1);
    console.assert(toBinary("2") === "10", 10);
    console.assert(toBinary("3") === "11", 11);
    console.assert(toBinary("4") === "100", 100);
}

function main()
{
    // infiniteLoop();
    // stackOverflow(1);
    stocksTests();
    caesarCipherTests();
    vigenereCipherTests();
    toBinaryTests();
}



main();
