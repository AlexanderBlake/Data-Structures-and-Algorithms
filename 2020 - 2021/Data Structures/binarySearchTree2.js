// TO-DO
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
        if (current)
        {
            this.inorder(current.left);
            console.log(current.value);
            this.inorder(current.right);
        }
    }

    preorder(current = this.root)
    {
        if (current)
        {
            console.log(current.value);
            this.inorder(current.left);
            this.inorder(current.right);
        }
    }

    postorder(current = this.root)
    {
        if (current)
        {
            this.inorder(current.left);
            this.inorder(current.right);
            console.log(current.value);
        }
    }

    breadthFirstTraversal(current = this.root, queue = new Queue())
    {

    }

    leafcount(current = this.root, count = 0)
    {
        let isLeaf = true;

        if (current.left)
        {
            isLeaf = false;
            count = this.leafcount(current.left, count);
        }
        if (current.right)
        {
            isLeaf = false;
            count = this.leafcount(current.right, count);
        }
        if (isLeaf)
        {
            return count + 1;
        }
        return count;
    }

    height(current = this.root)
    {
        console.log(node);
    }

    balancedCount(current = this.root)
    {

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

function main()
{
    tree = new Tree();

    tree.insert(24);
    tree.insert(10);
    tree.insert(5);
    tree.insert(15);
    tree.insert(20);
    tree.insert(23);
    tree.insert(30);
    tree.insert(40);

    tree.inorder();

    // tree.breadthFirstTraversal();
    // console.log(tree.leafcount());
}

main();
