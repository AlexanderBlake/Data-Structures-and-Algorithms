class Solution {
public:
    int fib(int n) {
        if (n < 2) {
            return n;
        }
        
        int current = 1;
        int previous = 0;
        for (int i = 2; i <= n; i++) {
            current += previous;
            previous = current - previous;
        }
        
        return current;
    }
};