class Solution:
    def buildGraph(self, equations, values):
        graph = {}

        for i in range(len(equations)):
            node1 = equations[i][0]
            node2 = equations[i][1]

            if node1 not in graph:
                graph[node1] = {}
            if node2 not in graph:
                graph[node2] = {}

            graph[node1][node2] = values[i]
            graph[node2][node1] = 1 / values[i]

        return graph


    def dfsTraversal(self, graph, curr, end, visited, value = 1.0):
        visited.add(curr)
        if curr == end:
            return value

        for node in graph[curr]:
            if node not in visited:
                result = self.dfsTraversal(graph, node, end, visited, value * graph[curr][node])
                visited.remove(node)
                if result != -1.0:
                    return result
        return -1.0


    def calcEquation(self, equations: List[List[str]], values: List[float], queries: List[List[str]]) -> List[float]:
        graph = self.buildGraph(equations, values)
        result = []

        for query in queries:
            curr = query[0]
            end = query[1]
            if curr not in graph or end not in graph:
                result.append(-1.0)
            elif curr == end:
                result.append(1.0)
            else:
                result.append(self.dfsTraversal(graph, curr, end, set()))
                
        return result
