class Node
{
    constructor(value, priority)
    {
        this.value = value;
        this.priority = priority;
        this.timeSpentInLine = 0;
        this.next;
    }
}

class PriorityQueue
{
    constructor()
    {
        this.queueByPriority = [];
    }

    push(value, priority)
    {
        if (!this.queueByPriority.length)
        {
            this.queueByPriority.push(new Node(value, priority));
        }
        else
        {
            let current;
            let added = false;
            for (let i = 0; i < this.queueByPriority.length; i++)
            {
                current = this.queueByPriority[i];
                if (current.priority == priority)
                {
                    while (current.next)
                    {
                        current = current.next;
                    }

                    current.next = new Node(value, priority);
                    added = true;
                }
            }

            if (!added)
            {
                this.queueByPriority.push(new Node(value, priority));
            }
        }
    }

    /*
    MUST BE CHANGED
    pop()
    {
        let poppedNode = this.queue;
        this.queue = this.queue.next;
        poppedNode.next = null;
        return poppedNode;
    }
    */
}

function main()
{
    queue = new PriorityQueue();

    queue.push(24, 1);
    queue.push(48, 3);
    queue.push(96, 2);
    queue.push(9, 3);
    console.log(queue);
}

main();
