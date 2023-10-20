class Solution {
public:
    int lengthOfLastWord(string s) {
        if (s.length() == 1) {
            return 1;
        }
        
        int end = s.length() - 1;
        while (end >= 0 && !isalpha(s[end])) {
            end--;
        }

        int start = end - 1;  
        while (start >= 0 && isalpha(s[start])) {
            start--;
        }
        return end - start;
    }
};