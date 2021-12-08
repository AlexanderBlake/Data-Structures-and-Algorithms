class Edge
{
    constructor(vertex1, vertex2, weight)
    {
        this.vertex1 = vertex1;
        this.vertex2 = vertex2;
        this.weight = weight;

        this.vertex1.edges.push(this);
        this.vertex2.edges.push(this);
    }
}

class PriorityQueue
{
    constructor()
    {
        this.front = null;
    }

    // Time Complexity: O(n) Linear Time
    enqueue(value, priority)
    {
        let newNode;

        if (!this.front)
        {
            this.front = new Node(value, priority);
        }
        else if (this.front.priority < priority)
        {
            newNode = new Node(value, priority);
            newNode.next = this.front;
            this.front = newNode;
        }
        else
        {
            let current = this.front;
            while (current.next && priority <= current.next.priority)
            {
                current = current.next;
            }

            newNode = new Node(value, priority);
            newNode.next = current.next;
            current.next = newNode;
        }
    }

    // O(1) Constant Time
    dequeue()
    {
        if (this.front)
        {
            let removedNode = this.front;
            this.front = this.front.next;

            removedNode.next = null;
            return removedNode;
        }
        return null;
    }

    // Time Complexity: O(n) Linear Time
    display()
    {
        if (this.front)
        {
            let current = this.front;
            let displayString = "";

            while (current.next)
            {
                displayString += "|" + current.value + "|" + current.priority + "| -> ";
                current = current.next;
            }

            displayString += "|" + current.value + "|" + current.priority + "|";
            console.log(displayString);
        }
        else
        {
            console.log("Empty Queue");
        }
    }
}

class Vertex
{
    constructor(name)
    {
        this.name = name;
        this.visited = false;
        this.edges = [];
    }
}

class Graph
{
    constructor()
    {
        this.vertices = new Map();
    }

    add(name)
    {
        this.vertices.set(name, new Vertex(name));
    }

    makeEdge(name1, name2, weight)
    {
        let edge = new Edge(this.vertices.get(name1), this.vertices.get(name2), weight);
    }

    resetVertices()
    {
        for (let val of this.vertices.values())
        {
            val.visited = false;
        }
    }

    dfsTraversal(name)
    {
        let edge;
        let currentVertex = this.vertices.get(name);
        let edges = currentVertex.edges;

        console.log(name);
        currentVertex.visited = true;

        for (let i = 0; i < edges.length; i++)
        {
            edge = edges[i];

            if (edge.vertex1.name === name && !edge.vertex2.visited)
            {
                this.dfsTraversal(edge.vertex2.name);
            }
            else if (edge.vertex2.name === name && !edge.vertex1.visited)
            {
                this.dfsTraversal(edge.vertex1.name);
            }
        }
    }

    bfsTraversal(name)
    {
        let edge;
        let edges;
        let currentName;
        let currentVertex;
        let queue = [name];

        while (queue.length !== 0)
        {
            currentVertex = this.vertices.get(queue[0]);
            currentName = currentVertex.name;
            edges = currentVertex.edges;
            currentVertex.visited = true;

            console.log(currentVertex.name);
            queue.splice(0, 1);
            
            for (let i = 0; i < edges.length; i++)
            {
                edge = edges[i];

                if (edge.vertex1.name === currentName && !edge.vertex2.visited && !queue.includes(edge.vertex2.name))
                {
                    queue.push(edge.vertex2.name);
                }
                else if (edge.vertex2.name === currentName && !edge.vertex1.visited && !queue.includes(edge.vertex1.name))
                {
                    queue.push(edge.vertex1.name);  
                }
            }
        }
    }
}

function main()
{
    graph = new Graph();

    for (let i = 65; i <= 70; i++)
    {
        graph.add(String.fromCharCode(i));
    }
    
    graph.makeEdge('A', 'B', 4);
    graph.makeEdge('A', 'C', 4);
    graph.makeEdge('C', 'B', 2);
    graph.makeEdge('C', 'E', 2);
    graph.makeEdge('E', 'F', 3);
    graph.makeEdge('C', 'F', 4);
    graph.makeEdge('C', 'D', 3);
    graph.makeEdge('D', 'F', 3);

    console.log("DFS Traversal");
    graph.dfsTraversal('D');
    graph.resetVertices();
    console.log("BFS Traversal");
    graph.bfsTraversal('D');
}

main();
