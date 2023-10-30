class Solution {
    public int romanToInt(String s) {
        HashMap<Character, Integer> values = new HashMap<>();

        values.put('I', 1);
        values.put('V', 5);
        values.put('X', 10);
        values.put('L', 50);
        values.put('C', 100);
        values.put('D', 500);
        values.put('M', 1000);

        int result = 0;
        for (int i = 0; i < s.length() - 1; i++) {
            int currVal = values.get(s.charAt(i));
            int nextVal = values.get(s.charAt(i + 1));

            if (nextVal > currVal) {
                result -= currVal;
            } else {
                result += currVal;
            }
        }

        return result + values.get(s.charAt(s.length() - 1));
    }
}