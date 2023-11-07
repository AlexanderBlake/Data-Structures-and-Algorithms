class RandomizedSet:
    def __init__(self):
        self.locations = {}
        self.myList = []

    def insert(self, val: int) -> bool:
        if val in self.locations:
            return False

        self.myList.append(val)
        self.locations[val] = len(self.myList) - 1
        return True

    def remove(self, val: int) -> bool:
        if val not in self.locations:
            return False
        
        index = self.locations[val]
        if index != len(self.locations) - 1:
            temp = self.myList[index]
            self.myList[index] = self.myList[-1]
            self.myList[-1] = temp

            self.locations[self.myList[index]] = index
        
        self.locations.pop(val)
        self.myList.pop()
        return True

    def getRandom(self) -> int:
        return self.myList[random.randint(0, len(self.myList) - 1)]


# Your RandomizedSet object will be instantiated and called as such:
# obj = RandomizedSet()
# param_1 = obj.insert(val)
# param_2 = obj.remove(val)
# param_3 = obj.getRandom()