class Solution {
public:    
    bool isPalindrome(string s) {
        int front = -1;
        int back = s.length();
        
        do { 
            do {
                s[front] = toupper(s[++front]);
            } while (!isalnum(s[front]) && front < s.length() - 1);
                
            do {
                s[back] = toupper(s[--back]);
            } while (!isalnum(s[back]) && back - 1 >= 0);
            
        } while (s[front] == s[back] && front < back);
        
        return front >= back;
    }
};