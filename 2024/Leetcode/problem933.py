class RecentCounter:
    def __init__(self):
        self.myQueue = deque()    
    
    def ping(self, t: int) -> int:
        self.myQueue.append(t)
        while self.myQueue[0] < t - 3000:
            self.myQueue.popleft()
        return len(self.myQueue)


# Your RecentCounter object will be instantiated and called as such:
# obj = RecentCounter()
# param_1 = obj.ping(t)