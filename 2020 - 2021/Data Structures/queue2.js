class Node
{
    constructor(name)
    {
        this.name = name;
        this.ahead = null;
        this.behind = null;
    }
}

// FIFO & LILO
class Queue
{
    constructor()
    {
        this.front = null;
        this.back = null;
        this.size = 0;
        this.displayString = "";
    }

    // Time Complexity: O(1)
    empty()
    {
        return this.size == 0;
    }

    // Time Complexity: O(1)
    push(value)
    {
        let newNode = new Node(value);
        newNode.ahead = this.back;

        if (this.back)
        {
            this.back.behind = newNode;
        }
        
        this.back = newNode;

        if (!this.size)
        {
            this.front = newNode;
            this.displayString = value;
        }
        else
        {
            this.displayString += " <- " + value;
        }

        this.size++;
    }

    // Time Complexity: O(1)
    // Return {string}
    pop()
    {
        let returnValue;

        if (!this.size)
        {
            return "";
        }

        else if (this.size == 1)
        {
            returnValue = this.back.name;
            this.back = null;
            this.front = null;
        }

        else
        {
            this.front = this.front.behind;
            returnValue = this.front.ahead.name;
            this.front.ahead = null;

            /*
            let currentNode = this.back;
            while (currentNode.ahead != this.front)
            {
                currentNode = currentNode.ahead;
            }

            this.front = currentNode;
            returnValue = currentNode.ahead.name;
            this.front.ahead = null;
            */
        }

        if (this.size <= 1)
        {
            this.displayString = "";
        } 
        else
        {
            this.displayString = this.displayString.substring(returnValue.length + 4);
        }
        this.size--;
    
        return returnValue;
    }

    display()
    {
        if (!this.size)
        {
            console.log("Empty Queue");
        }
        else
        {
            console.log(this.displayString);
        }
        
    }
}

function main()
{
    queue = new Queue();
    queue.push("Carlos");
    queue.push("Christopher");
    queue.push("Paul");

    console.log(queue.pop());
    console.log(queue);
    console.log(queue.pop());
    console.log(queue.pop());
    queue.display();
}

main()
