// n: haystack.length
// Time Complexity: O(n)
// Space Complexity: O(1)
function strStr(haystack: string, needle: string): number {
    // return haystack.search(needle);
    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
        if (haystack.substring(i, i + needle.length) == needle) {
            return i;
        }
    }
    return -1;
};