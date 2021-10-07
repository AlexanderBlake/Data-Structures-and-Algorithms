class Node
{
    constructor(name)
    {
        this.name = name;
        this.next = null;
    }
}

class Stack
{
    constructor()
    {
        this.bottom = null;
        // this.size = 0;
    }

    // Time Complexity: O(n)
    empty()
    {
        return this.size(this.bottom) == 0;
    }

    // Time Complexity: O(n)
    size(node, length = 0)
    {
        if (!node)
        {
            return length;
        }

        return this.size(node.next, ++length);
    }

    // Time Complexity: O(n)
    pop()
    {
        let currentName;

        if (this.empty())
        {
            return "";
        } 
        else if (!this.bottom.next)
        {
            currentName = this.bottom.name;
            this.bottom = null;
        }
        else
        {
            let current = this.bottom;
            while (current.next.next !== null)
            {
                current = current.next;
            }

            currentName = current.next.name;
            current.next.name = "";
            current.next = null;
        }
        // this.size--;
        return currentName;
    }

    // Time Complexity: O(n)
    push(name)
    {
        if (this.empty())
        {        
            this.bottom = new Node(name);
        }
        else
        {
            let current = this.bottom;
            while (current.next !== null)
            {
                current = current.next;
            }
            current.next = new Node(name);
        }

        // this.size++;
    }

    // Time Complexity: O(n)
    display()
    {
        if (!this.empty())
        {
            let current = this.bottom;
            let myString = "Size: " + this.size(this.bottom) + "\n";

            while (current.next)
            {
                myString += current.name + " -> ";
                current = current.next;
            }

            console.log(myString + current.name);
        }
        else
        {
            console.log("Stack is empty");
        }
    }
}

function main()
{
    stack = new Stack();

    stack.push("Bryan");
    
    console.log(stack.pop());
    stack.display();

    stack.push("Carlos");
    stack.push("Christopher");
    stack.push("Paul");
    stack.push("Devin");
    stack.push("Scott");
    stack.push("Robert");

    stack.display();
}

main();
