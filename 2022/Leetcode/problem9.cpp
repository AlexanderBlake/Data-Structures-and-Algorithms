class Solution {
public:
    bool isPalindrome(int x) {
        if (x == 0) {
            return true;
        } else if (x < 0) {
            return false;
        }
               
        int back;
        int temp;
        int front;
        int exp = log10(x);
        
        for (int i = 0; i <= exp / 2; i++) {
            temp = x / pow(10, exp - i);
            front = temp % 10;
            
            temp = x / pow(10, i);
            back = temp % 10;

            if (front != back) {
                return false;
            }
        }
        
        return true;
    }
};