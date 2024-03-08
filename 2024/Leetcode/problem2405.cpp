class Solution {
public:
    int partitionString(string s) {
        int result = 1;
        unordered_set<char> substring;

        for (auto character: s) {
            if (substring.find(character) == substring.end()) {
                substring.insert(character);
            } else {
                substring.clear();
                substring.insert(character);
                result++;
            }
        }
        return result;
    }
};