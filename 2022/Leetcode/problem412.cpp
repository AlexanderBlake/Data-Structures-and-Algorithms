class Solution {
public:
    vector<string> fizzBuzz(int n) {
        bool isNum;
        string result;
        vector<string> answer(n);
        
        for (int i = 1; i <= n; i++) {
            result = "";
            isNum = true;
            
            if (i % 3 == 0) {
                result += "Fizz";
                isNum = false;
            }
            
            if (i % 5 == 0) {
                result += "Buzz";
                isNum = false;
            }
            
            if (isNum) {
                result = to_string(i);
            }
            
            answer[i - 1] = result;
        }
        
        return answer;
    }
};