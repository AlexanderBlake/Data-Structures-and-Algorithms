class Solution:
    def dfsTraversal(self, graph: dict, current: int, visited: set) -> bool:
        if current in visited:
            return False

        visited.add(current)

        for course in graph[current]:
            if not self.dfsTraversal(graph, course, visited):
                return False
            
        visited.remove(current)
        graph[current] = []

        return True


    def buildGraph(self, courses: List[List[int]], numCourses: int) -> dict:
        graph = {i: [] for i in range(numCourses)}

        for course in courses:
            graph[course[0]].append(course[1])

        return graph


    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        graph = self.buildGraph(prerequisites, numCourses)

        for start in range(numCourses):
            if not self.dfsTraversal(graph, start, set()):
                return False
        return True
