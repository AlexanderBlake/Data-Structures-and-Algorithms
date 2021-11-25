function palindrome(s)
{
    if (s.length <= 1)
    {
        return true;
    }
    if (s[0] === s[s.length - 1])
    {
        return palindrome(s.substring(1, s.length - 1));
    }
    return false;
}

function reverse(s)
{
    if (s.length === 1)
    {
        return s;
    }

    return reverse(s.substring(1)) + s[0];
}

function palindromeTests()
{
    console.assert(palindrome("madam"), "Palindrome madam");
    console.assert(!palindrome("alex"), "Palindrome alex");
    console.assert(palindrome("463364"), "Palindrome 463364");
    console.assert(!palindrome("test"), "Palindrome test");
    console.assert(palindrome("ABLEWASIEREISAWELBA"), "Palindrome ABLEWASIEREISAWELBA");
    console.assert(!palindrome("abc"), "Palindrome abc");
}

function reverseTests()
{
    console.assert(reverse("madam") === "madam", "Reverse madam");
    console.assert(reverse("alex") === "xela", "Reverse xela");
    console.assert(reverse("test") === "tset", "Reverse tset");
    console.assert(reverse("abc") === "cba", "Reverse cba");
    console.assert(reverse("463364") === "463364", "Reverse 463364");
    console.assert(reverse("ABLEWASIEREISAWELBA") === "ABLEWASIEREISAWELBA", "Reverse ABLEWASIEREISAWELBA");
}

function main()
{
    palindromeTests();
    reverseTests();
}

main();
