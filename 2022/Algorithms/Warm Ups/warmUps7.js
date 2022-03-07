function reorder(str1, str2, str3)
{
    let temp;

    for (let i = 0; i < 2; i++)
    {
        if (str2.length > str1.length)
        {
            temp = str1;
            str1 = str2;
            str2 = temp;
        }

        if (i === 0 && str3.length > str2.length)
        {
            temp = str3;
            str3 = str2;
            str2 = temp;
        }
    }

    return str1 + " " + str2 + " " + str3;
}

function reorderTests() {
    console.assert(reorder("", "", "") == "  ", "3 Empty Strings");
    console.assert(reorder("a", "a", "a") == "a a a", "3 Non-empty Strings of the Same Length");
    console.assert(reorder("a", "ab", "ab") == "ab ab a", "2 Strings of the same length 1");
    console.assert(reorder("ab", "a", "ab") == "ab ab a",  "2 Strings of the same length 2");
    console.assert(reorder("ab", "ab", "a") == "ab ab a",  "2 Strings of the same length 3");
    console.assert(reorder("a", "ab", "abc") == "abc ab a", "All three different length 1");
    console.assert(reorder("a", "abc", "ab") == "abc ab a", "All three different length 2");
    console.assert(reorder("ab", "a", "abc") == "abc ab a", "All three different length 3");
    console.assert(reorder("ab", "abc", "a") == "abc ab a", "All three different length 4");
    console.assert(reorder("abc", "a", "ab") == "abc ab a", "All three different length 5");
    console.assert(reorder("abc", "ab", "a") == "abc ab a", "All three different length 6");
}

function main()
{
    reorderTests();
}

main();
