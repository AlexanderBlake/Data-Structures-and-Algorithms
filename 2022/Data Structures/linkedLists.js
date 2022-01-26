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

    }

    insert(value)
    {

    }

    reverse()
    {

    }

    // 24 -> 48 -> 10 -> 15
    toString()
    {
        let myString = "";
        let current = this.head;

        while (current.next)
        {
            myString += current.value + " -> ";
            current = current.next;
        }

        return myString + current.value;
    }
}


function main()
{
    sll = new SinglyLinkedList();

    sll.pushBack(24);
    sll.pushBack(48);
    sll.pushBack(10);
    sll.pushBack(15);

    console.log(sll.toString());
}

main();
