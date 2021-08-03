class Node
{
    constructor(value)
    {
        this.value = value;
        this.next = null;
    }
}

class Stack
{
    constructor()
    {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    top()
    {
        if (this.size)
        {
            return this.tail.value;
        }
        return -1;
    }

    isEmpty()
    {
        return this.size === 0;
    }

    push(value)
    {
        if (!this.head)
        {
            this.head = new Node(value);
            this.tail = this.head;
        }
        else
        {
            this.tail.next = new Node(value);
            this.tail = this.tail.next;
        }

        this.size++;
    }

    pop()
    {
        if (!this.tail)
        {
            return -1;
        }

        let value = this.tail.value;

        if (this.size === 1)
        {
            this.head = null;
            this.tail = null;
        }
        else
        {
            let current = this.head;
            while (current.next != this.tail)
            {
                current = current.next;
            }

            // this.tail.value = 0;
            this.tail = null;
            current.next = null;
            this.tail = current;
        }

        this.size--;
        return value;
    }
}

class Queue
{
    constructor()
    {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    back()
    {
        let returnVal = -1;
        if (this.size)
        {
            returnVal = this.tail.value;
        }
        return returnVal;
    }

    isEmpty()
    {
        return this.size === 0;
    }

    push(value)
    {
        let newNode = new Node(value);
        if (!this.size)
        {
            this.head = newNode;
            this.tail = newNode;
        }
        else
        {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.size++;
    }

    pop()
    {
        if (!this.size)
        {
            return -1;
        } 
        else 
        {
            let poppedNode = this.head;

            if (this.size === 1)
            {
                this.head = null;
                this.tail = null;
            }
            else
            {
                this.head = this.head.next;
            }
            
            poppedNode.next = null;
            this.size--;
            return poppedNode.value;
        }
    }

    display()
    {
        if (this.head)
        {
            let current = this.head;
            let displayString = "";

            while (current.next)
            {
                displayString += current.value + " -> ";
                current = current.next;
            }

            displayString += current.value;
            console.log(displayString);
        }
        else 
        {
            console.log("Empty Queue");
        }
    }
}

function queueTests()
{
    let queue = new Queue();

    queue.push(24);
    queue.push(48);
    queue.push(96);

    queue.display();
    // console.log(queue);

    console.log(queue.pop());

    console.log(queue.pop());

    console.log(queue.pop());
    queue.display();

    console.log(queue.pop());
    queue.display();
    console.log(queue);
}

function stackTests()
{
    stack = new Stack();

    console.assert(stack.isEmpty(), "Empty Stack");
    console.assert(stack.top() === -1, "Empty Stack top() test");

    stack.push(24);
    console.assert(!stack.isEmpty(), "Non-empty Stack");
    console.assert(stack.top() === 24, 24);

    stack.push(48);
    stack.push(96);
    console.assert(stack.top() === 96, 96);
    console.log(stack);

    console.assert(stack.pop() === 96);
    console.log(stack);

    console.assert(stack.pop() === 48);
    console.log(stack);

    console.assert(stack.pop() === 24);
    console.log(stack);

    console.assert(stack.isEmpty(), "Empty Stack 2");
    console.assert(stack.pop() === -1);
    console.assert(stack.isEmpty(), "Empty Stack 3");
    console.assert(stack.top() === -1, "Empty Stack top() test");
    console.log(stack);
}

function isBalanced(equation)
{
    if (equation.length < 1)
    {
        return false;
    }

    let count = 0;
    for (let i = 0; i < equation.length; i++)
    {
        if (equation[i] === "(")
        {
            count++;
        }
        else if (equation[i] === ")")
        {
            count--;
        }

        if (count < 0)
        {
            return false;
        }
    }

    return count === 0;
}

function isBalancedTests()
{
    console.assert(!isBalanced(""), "Empty String");
    console.assert(isBalanced("2 + 4"), "No Parenthesis");
    console.assert(!isBalanced("(2 + 4"), "Opening Parenthesis w/o closing parenthesis");
    console.assert(isBalanced("(2 + 4)"), "Opens and closes");
    console.assert(!isBalanced("2 + 4)"), "Closes before openning");
    console.assert(!isBalanced("(2 + 4))"), "Closes one too many times");
    console.assert(!isBalanced("((2 + 4)"), "Is not closed for a final time");
    console.assert(!isBalanced("))2 + 4(("), "Not in the correct order");
}

function stackOverflow(i)
{
    console.log(i);
    stackOverflow(++i);
}
    
function main()
{
    isBalancedTests();
    // stackOverflow(1);
    // stackTests();
    queueTests();
}

main();
