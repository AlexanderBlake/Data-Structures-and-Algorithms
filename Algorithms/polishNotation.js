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

function polishNotation(expression)
{
    let x;
    let y;
    let nums = 0;
    let operation;
    let myStack = new Stack();
    
    expression = expression.split(" ");

    for (let i = 0; i < expression.length; i++)
    {
        if (expression[i] !== "+" && expression[i] !== "-" && expression[i] !== "*" && expression[i] !== "/")
        {
            myStack.push(parseInt(expression[i]));
            nums++;
        }
        else
        {
            myStack.push(expression[i]);
            nums = 0;
        }
        if (nums === 2 && myStack.size !== 1)
        {
            y = myStack.pop();
            x = myStack.pop();
            operation = myStack.pop();

            switch(operation)
            {
                case "+":
                {
                    myStack.push(x + y);
                    break;
                }
                case "-":
                {
                    myStack.push(x - y);
                    break;
                }
                case "*":
                {
                    myStack.push(x * y);
                    break;
                }
                default:
                {
                    myStack.push(x / y);
                }
            }
            nums = 1;
        }
    }

    return myStack.pop();
}

function polishNotationTests()
{
    let result;
    
    result = polishNotation("+ 1 2");
    console.assert(result === 3, "Expected: 3, Actual: " + result);

    result = polishNotation("* - 5 6 7");
    console.assert(result === -7, "Expected: -7, Actual: " + result);

    result = polishNotation("- 5 * 6 7");
    console.assert(result === -37, "Expected: -37, Actual: " + result);
}


function main()
{
    polishNotationTests();
}

main();
