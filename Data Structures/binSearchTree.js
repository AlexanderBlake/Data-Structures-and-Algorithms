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
}

function main()
{
    tree = new Tree();

    tree.insert(5);
    tree.insert(3);
    tree.insert(2);
    tree.insert(4);
    tree.insert(7);
    tree.insert(6);
    tree.insert(8);

    tree.inorder();
}

main();
