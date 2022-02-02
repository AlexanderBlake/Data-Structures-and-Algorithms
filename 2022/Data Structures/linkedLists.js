class Node
{
    constructor(value)
    {
        this.value = value;
        this.next = null;
        // this.previous = null;
    }
}

// Insertion(s)/Search/Removal
// Average Time Complexity: O(n), Best: O(1)
// Space Complexity: O(n)
class SinglyLinkedList
{
    constructor()
    {
        this.head = null;
    }

    pushBack(value)
    {
        let current;

        if (!this.head)
        {
            this.head = new Node(value);
        }
        else
        {
            current = this.head;

            while (current.next)
            {
                current = current.next;
            }

            current.next = new Node(value);
        }
    }

    pushFront(value)
    {
        let newNode = new Node(value);

        if (this.head)
        {
            newNode.next = this.head;
        }
        this.head = newNode;
    }

    sort()
    {

    }

    insert(value)
    {
        // this.sort();

        if (!this.head)
        {
            this.head = new Node(value);
        }
        else
        {
            let current = this.head;
            let newN = new Node(value);

            while (current.next && value > current.next.value)
            {
                current = current.next;
            }

            newN.next = current.next;
            current.next = newN;
        }
    }

    reverse()
    {

    }

    // 24 -> 48 -> 10 -> 15
    toString()
    {
        let myString = "";
        let current = this.head;

        while (current)
        {
            myString += current.value;
            current = current.next;

            if (current)
            {
                myString += " -> ";
            }
        }

        return myString;
    }
}


function main()
{
    sll = new SinglyLinkedList();

    /*
    sll.pushBack(24);
    sll.pushBack(48);
    sll.pushBack(10);
    sll.pushBack(15);

    sll.pushFront(99);
    */

    sll.insert(1);
    sll.insert(5);
    sll.insert(2);
    sll.insert(4);
    sll.insert(3);


    console.log(sll.toString());
}

main();
