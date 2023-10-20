class Solution {
public:
    int romanToInt(string s) {
        map<char, int> conversionValues;
        
        conversionValues.insert(pair<char, int>('I', 1));
        conversionValues.insert(pair<char, int>('V', 5));
        conversionValues.insert(pair<char, int>('X', 10));
        conversionValues.insert(pair<char, int>('L', 50));
        conversionValues.insert(pair<char, int>('C', 100));
        conversionValues.insert(pair<char, int>('D', 500));
        conversionValues.insert(pair<char, int>('M', 1000));
        
        int sum = 0;
        for (int i = 0; i < s.length(); i++) {
            int current = conversionValues[s[i]];
            int next = conversionValues[s[i + 1]];
            
            if (next > current) {
                sum += next - current;
                i++;
            } else {
                sum += current;
            }
        }
        
        return sum;
    }
};