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
			this.table[i] = null;
		}
	}

	hashFunction(n)
	{
		return n % this.SIZE;
	}

	put(value)
	{
		let index = this.hashFunction(value);
		let current = this.table[index];

		if (!current)
		{
			this.table[index] = new Node(value);
		}
		else
		{
			while (current.next)
			{
				current = current.next;
			}

			current.next = new Node(value);
		}
	}
}

function main()
{
	table = new HashTable();

	table.put(24);
	table.put(14);
	table.put(20);
	table.put(5);
	table.put(36);
	table.put(42);

	console.log(table);
}

main();
