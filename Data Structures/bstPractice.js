class Node
{
    constructor(value)
    {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST
{
    constructor(value)
    {
        this.root = new Node(value);
    }

    insert(value)
    {
        let current = this.root;
        let keepGoing = true;

        while (keepGoing)
        {
            if (value < current.value)
            {
                if (current.left)
                {
                    current = current.left;
                }
                else
                {
                    current.left = new Node(value);
                    keepGoing = false;
                }
            }
            else
            {
                if (current.right)
                {
                    current = current.right;
                }
                else
                {
                    current.right = new Node(value);
                    keepGoing = false;
                }
            }
        }
    }

    displayInOrder(current = null)
    {
        if (!current)
        {
            current = this.root;
        }

        if (current.left)
        {
            this.displayInOrder(current.left);
        }
        console.log(current.value);
        if(current.right)
        {
            this.displayInOrder(current.right);
        }
    }

    displayPreOrder(current = null)
    {
        if (!current)
        {
            current = this.root;
        }

        console.log(current.value);
        if(current.left)
        {
            this.displayPreOrder(current.left);
        }
        if(current.right)
        {
            this.displayPreOrder(current.right);
        }

    }

    displayPostOrder(current = null)
    {
        if (!current)
        {
            current = this.root;
        }

        if (current.left)
        {
            this.displayPostOrder(current.left);
        }
        if (current.right)
        {
            this.displayPostOrder(current.right);
        }
        console.log(current.value);
    }
}

function main()
{
    bst = new BST(8);

    bst.insert(3);
    bst.insert(1);
    bst.insert(6);
    bst.insert(4);
    bst.insert(7);
    bst.insert(10);
    bst.insert(14);
    bst.insert(13);

    // console.log(bst.root);
    // bst.displayInOrder();
    // bst.displayPreOrder();
    bst.displayPostOrder();
}

main();