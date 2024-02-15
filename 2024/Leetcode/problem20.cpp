class Solution {
public:
    bool isValid(string s) {
        stack<char> myStack;
        unordered_map<char, char> matches = {{'(', ')'}, {'{', '}'}, {'[', ']'}};

        for (int i = 0; i < s.size(); i++) {
            if (matches.find(s[i]) != matches.end()) {
                myStack.push(s[i]);
            } else if (myStack.size() != 0 and matches[myStack.top()] == s[i]) {
                myStack.pop();
            } else {
                return false;
            }
        }
        return myStack.empty();
    }
};