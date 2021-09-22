class Node
{
    constructor(value)
    {
        this.value = value;
        this.next = null;
    }
}

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
        return value % SIZE;
    }
}

function main()
{
    table = new HashTable();

    console.log(table.table);
}

main();
