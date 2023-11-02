class Node
{
    constructor(value)
    {
        this.value = value;
        this.next = null;
    }
}

// Time Complexity: O(1) Constant Time
class HashTable
{
    constructor()
    {
        this.table = [];
        this.SIZE = 7;

        for (let i = 0; i < this.SIZE; i++)
        {
            this.table.push(null);
        }
    }

    hashFunction(value)
    {
        return value % this.SIZE;
    }

    insert(value)
    {
        let index = this.hashFunction(value);

        if (!this.table[index])
        {
            this.table[index] = new Node(value);
        }
        else
        {
            let current = this.table[index];
            while (current.next)
            {
                current = current.next;
            }
            current.next = new Node(value);
        }
    }

    remove(value)
    {
        let current;
        let index = this.hashFunction(value);

        if (!this.table[index])
        {
            return false;
        }

        if (this.table[index].value === value)
        {
            current = this.table[index];
            this.table[index] = this.table[index].next;
            current.next = null;
            current = null;
        }
        else if (this.table[index].next)
        {
            let previous = this.table[index];
            current = previous.next;

            while (current.next && current.value !== value)
            {
                previous = current;
                current = previous.next;
            }

            if (current.value !== value)
            {
                return false;
            }

            previous.next = current.next;
            current.next = null;
            current = null;
        }

        return true;
    }

    searchLinkedList(current, value, index = 0)
    {
        if (current === null) 
        {
            return -1;
        }
        if (current.value === value)
        {
            return index;
        }

        return this.searchLinkedList(current.next, value, ++index);
    }

    search(value)
    {
        let hashTableIndex = this.hashFunction(value);
        let linkedListIndex = this.searchLinkedList(this.table[hashTableIndex], value);

        if (linkedListIndex === -1)
        {
            return [-1, -1];
        }

        return [hashTableIndex, linkedListIndex];
    }

    display()
    {
        let current;
        let myString;

        for (let i = 0; i < this.SIZE; i++)
        {
            current = this.table[i];
            myString = i + ": ";

            if (this.table[i])
            {
                myString += current.value;

                while (current.next)
                {
                    current = current.next;
                    myString += " -> " + current.value;
                }
            }
            console.log(myString);   
        }
    }
}

function main()
{
    table = new HashTable();

    table.insert(24);
    table.insert(10);
    table.insert(31);
    table.insert(21);
    table.insert(35);
    table.insert(6);
    table.insert(13);
    table.insert(8);
    table.insert(3);

    // First Conditional
    console.assert(!table.remove(16));

    // Second If Conditional
    console.assert(table.remove(8));

    // Final Conditional
    console.assert(table.remove(3));
    console.assert(table.remove(24));
    console.assert(!table.remove(24));

    table.display();

    console.log(table.search(31));
    console.log(table.search(99));
    console.log(table.search(3));
}

main();
