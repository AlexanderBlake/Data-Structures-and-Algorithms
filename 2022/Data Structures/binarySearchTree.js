class Node
{
    constructor(value)
    {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree
{
    constructor()
    {
        this.root = null;
    }

    insert(value)
    {
        if (!this.root)
        {
            this.root = new Node(value);
        }
        else
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
                else if (current.right)
                {
                    current = current.right;
                }
                else
                {
                    current.right = new Node(value);
                    keepGoing = false;    
                }
            }

            current = new Node(value);
        }
    }

    // 8, 3, 1, 6, 4, 7, 10, 14, 13
    preorderTraversal(current = this.root)
    {

    }

    // 1, 3, 4, 6, 7, 8, 10, 13, 14
    inOrderTraversal(current = this.root)
    {
        if (current)
        {
            this.inOrderTraversal(current.left);
            console.log(current.value);
            this.inOrderTraversal(current.right);
        }
    }

    // 1, 4, 7, 6, 3, 13, 14, 10, 8
    postOrderTraversal(current = this.root)
    {
        
    }
}

function main()
{
    tree = new BinarySearchTree();

    tree.insert(8);
    tree.insert(3);
    tree.insert(10);
    tree.insert(1);
    tree.insert(6);
    tree.insert(14);
    tree.insert(4);
    tree.insert(7);
    tree.insert(13);

    tree.inOrderTraversal();
}

main();
