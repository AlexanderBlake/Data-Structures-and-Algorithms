class Node
{
    constructor(value, priority)
    {
        this.value = value;
        this.priority = priority;
        this.next;
    }
}

// Space Complexity: O(n) Linear Space
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

function main()
{
    queue = new PriorityQueue();

    queue.enqueue(24, 1);
    queue.display();
    queue.enqueue(48, 3);
    queue.display();
    queue.enqueue(96, 2);
    queue.display();
    queue.enqueue(19, 1);
    queue.display();

    for (let i = 0; i < 5; i++) 
    {
        console.log(queue.dequeue());
    }
    queue.display();

    queue.enqueue(88, 1);
    queue.display();
}

main();
