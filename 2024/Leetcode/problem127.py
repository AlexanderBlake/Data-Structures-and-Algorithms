class Solution:
    def buildDictionaries(self, words: List[str]):
        patterns = {}
        adjacencyList = {}
        for word in words:
            for i in range(len(word)):
                pattern = word[:i] + '*' + word[i + 1:]

                if i == 0:
                    patterns[word] = [pattern]
                else:
                    patterns[word].append(pattern)

                if pattern not in adjacencyList:
                    adjacencyList[pattern] = [word]
                else:
                    adjacencyList[pattern].append(word)

        return patterns, adjacencyList

    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
        if endWord not in wordList:
            return 0

        count = 0
        visited = set()
        queue = deque([(beginWord, 1)])
        patterns, adjacencyList = self.buildDictionaries(wordList + [beginWord])
        
        while queue:
            currWord, count = queue.popleft()
            visited.add(currWord)

            for pattern in patterns[currWord]:
                for word in adjacencyList[pattern]:
                    if word == endWord:
                        return count + 1
                    if word not in visited and currWord != word:
                        queue.append((word, count + 1))

        return 0