class MinStack {
private:
    vector<int> vals;
    vector<int> mins;
public:
    MinStack() {

    }
    
    void push(int val) {
        vals.push_back(val);
        if (mins.size() > 0) {
            mins.push_back(val > mins.back() ? mins.back() : val);
        } else {
            mins.push_back(val);
        }
    }
    
    void pop() {
        vals.pop_back();
        mins.pop_back();
    }
    
    int top() {
        return vals.back();
    }
    
    int getMin() {
        return mins.back();
    }
};

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack* obj = new MinStack();
 * obj->push(val);
 * obj->pop();
 * int param_3 = obj->top();
 * int param_4 = obj->getMin();
 */