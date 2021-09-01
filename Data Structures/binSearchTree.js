class Node
{
    constructor(value)
    {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree
{
    constructor()
    {
        this.root = null;
    }

    insert(value)
    {
        let current;
        let inserted;

        if (!this.root)
        {
            this.root = new Node(value);
        }

        else
        {
            current = this.root;
            inserted = false;

            while (!inserted)
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
                        inserted = true;
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
                        inserted = true;
                    }
                }
            }
        }
    }

    inorder(current = this.root)
    {
        if (current.left)
        {
            this.inorder(current.left);
        }
        console.log(current.value);
        if (current.right)
        {
            this.inorder(current.right);
        }
    }

    preorder(current = this.root)
    {
        console.log(current.value);
        if (current.left)
        {
            this.preorder(current.left);
        }
        if (current.right)
        {
            this.preorder(current.right);
        }
    }

    postorder(current = this.root)
    {
        if (current.left)
        {
            this.postorder(current.left);
        }
        if (current.right)
        {
            this.postorder(current.right);
        }
        console.log(current.value);
    }

    breadthFirstTraversal()
    {

    }
}

function main()
{
    tree = new Tree();

    tree.insert(24);
    tree.insert(10);
    tree.insert(5);
    tree.insert(15);
    tree.insert(30);
    tree.insert(25);
    tree.insert(40);

    tree.postorder();
}

main();
