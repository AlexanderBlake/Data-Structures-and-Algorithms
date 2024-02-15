class RandomizedSet {
private:
    unordered_map<int, int> myTable;
    vector<int> myList;
public:
    RandomizedSet() {
        
    }
    
    bool insert(int val) {
        if (myTable.find(val) == myTable.end()) {
            myTable.insert({val, myList.size()});
            myList.push_back(val);
            return true;
        }
        return false;
    }
    
    bool remove(int val) {
        if (myTable.find(val) != myTable.end()) {
            int index = myTable[val];
            
            int temp = myList[index];
            myList[index] = myList[myList.size() - 1];
            myList[myList.size() - 1] = temp;

            myTable[myList[index]] = index;

            myList.pop_back();
            myTable.erase(val);

            return true;
        }
        return false;
    }
    
    int getRandom() {
        return myList[rand() % myList.size()];
    }
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * RandomizedSet* obj = new RandomizedSet();
 * bool param_1 = obj->insert(val);
 * bool param_2 = obj->remove(val);
 * int param_3 = obj->getRandom();
 */