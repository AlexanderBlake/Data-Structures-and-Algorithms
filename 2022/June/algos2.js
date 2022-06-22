// Time Complexity: O(n) Linear Time
function romanNumerals(s) {
    let count = 0;
    let val1;
    let val2;
    let conversion = {"M": 1000, "D": 500, "C": 100, "L": 50, "X": 10, "V": 5, "I": 1};

    for (let i = 0; i < s.length; i++) {
        val1 = conversion[s[i]];

        if (i !== s.length - 1) {
            val2 = conversion[s[i + 1]];
        } else {
            val2 = 0;
        }

        if (val2 > val1) {
            count += val2 - val1;
            i++;
        } else {
            count += val1;
        }
    }

    return count;
}

function romanNumeralsTests() {
    console.assert(romanNumerals("III") == 3, 3);
    console.assert(romanNumerals("LVIII") === 58, 58);
    console.assert(romanNumerals("MCMXCV") === 1995, 1995);
    console.assert(romanNumerals("MMXXII") === 2022, 2022);
}

function main() {
    romanNumeralsTests();
}

main();
