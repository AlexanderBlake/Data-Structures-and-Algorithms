class Solution {
public:
    int mySqrt(int x) {
        int low = 0;
        long high = x;
        long guess;

        do {
            guess = (low + high) / 2;
    
            if (guess * guess < x) {
                low = guess;
            } else if (guess * guess > x) {
                high = guess;
            } else {
                return guess;
            }
        } while (high - low > 1);
        
        if (high * high == x) {
            return high;
        }
        return low;
    }
};