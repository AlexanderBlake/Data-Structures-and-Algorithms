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
                myString += current.value + " -> ";

                while (current.next)
                {
                    current = current.next;
                    myString += current.value + " -> ";
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

    table.display();
}

main();
