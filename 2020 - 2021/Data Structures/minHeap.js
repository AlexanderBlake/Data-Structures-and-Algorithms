class Node
{
    constructor(value)
    {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class MinHeap
{
    constructor(value = null)
    {
        if (value)
        {
            this.min = new Node(value);
        }
        else
        {
            this.min = null;
        }
    }

    heapify()
    {

    }
}

function main()
{
    console.log("Hello World");
}

main();
