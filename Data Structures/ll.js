class SLLNode
{
    constructor(value)
    {
        this.value = value;
        this.next = null;
    }
}

class SLinkedList
{
    constructor()
    {
        this.head = null;
        this.tail = null;
    }

    insert(value)
    {
        let inserted = false;
        let newNode = new SLLNode(value);

        if (this.head)
        {
            if (this.head.value > value)
            {
                newNode.next = this.head;
                this.head = newNode;
                inserted = true;
            }
            else if (this.tail.value > value)
            {
                let current = this.head;

                while (current.next && current.next.value < value)
                {
                    current = current.next;
                }

                newNode.next = current.next;
                current.next = newNode;
                inserted = true;
            }
        }
        
        if (!inserted)
        {
            this.append(value);
        }
    }

    append(value)
    {
        if (!this.tail)
        {
            this.head = new SLLNode(value);
            this.tail = this.head;
        }
        else
        {
            this.tail.next = new SLLNode(value);
            this.tail = this.tail.next;
        }
    }

    display()
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

    search(value)
    {
        if (this.head)
        {
            let current = this.head;
            let i = 0;

            while (current.next && current.value != value)
            {
                current = current.next;
                i++;
            }

            if (current.value == value)
            {
                return i;
            }
        }

        return -1;
    }
}

class DLLNode
{
    constructor(value)
    {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DLinkedList
{
    constructor()
    {
        this.head = null;
        this.tail = null;
    }

    insert(value)
    {
        let inserted = false;
        let newNode = new DLLNode(value);

        if (this.head)
        {
            if (this.head.value > value)
            {
                this.head.prev = newNode;
                newNode.next = this.head;
                this.head = newNode;
                inserted = true;
            }
            else if (this.tail.value > value)
            {
                let current = this.head;

                while (current.next && current.next.value < value)
                {
                    current = current.next;
                }

                newNode.next = current.next;
                current.next = newNode;
                newNode.next.prev = newNode;
                newNode.prev = current;
                inserted = true;
            }
        }
        
        if (!inserted)
        {
            this.append(value);
        }
    }

    append(value)
    {
        if (!this.tail)
        {
            this.head = new DLLNode(value);
            this.tail = this.head;
        }
        else
        {
            this.tail.next = new DLLNode(value);
            this.tail.next.prev = this.tail;
            this.tail = this.tail.next;
        }
    }

    display()
    {
        let current = this.head;
        let displayString = "";

        while (current.next)
        {
            displayString += current.value + " <-> ";
            current = current.next;
        }

        displayString += current.value;
        console.log(displayString);
    }
}

class CSLinkedList
{
    constructor()
    {
        this.head = null;
        this.tail = null;
    }

    insert(value)
    {
        let inserted = false;
        let newNode = new SLLNode(value);

        if (this.head)
        {
            if (this.head.value > value)
            {
                newNode.next = this.head;
                this.head = newNode;
                this.tail.next = this.head;
                inserted = true;
            }
            else if (this.tail.value > value)
            {
                let current = this.head;

                while (current.next && current.next.value < value)
                {
                    current = current.next;
                }

                newNode.next = current.next;
                current.next = newNode;
                inserted = true;
            }
        }
        
        if (!inserted)
        {
            this.append(value);
        }
    }

    append(value)
    {
        if (!this.tail)
        {
            this.head = new SLLNode(value);
            this.tail = this.head;
        }
        else
        {
            this.tail.next = new SLLNode(value);
            this.tail = this.tail.next;
            this.tail.next = this.head;
        }
    }

    display()
    {
        let current = this.head;
        let displayString = "";

        while (current.next != this.head)
        {
            displayString += current.value + " -> ";
            current = current.next;
        }

        displayString += current.value + " -> "
        console.log(displayString);
    }
}

function search(arr, value)
{
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] == value)
        {
            return i;
        }
    }

    return -1;
}

function sLLTests()
{
    list = new SLinkedList();

    console.log(search([], 50));
    console.log(list.search(50));

    list.append(24);
    list.append(48);
    list.append(96);
    list.insert(50);
    list.insert(100);
    list.append(200);
    list.insert(12);

    // list.display();
    // console.log(list);

    arr = [12, 24, 48, 50, 96, 100, 200];

    console.log(search(arr, 50));
    console.log(search(arr, 60));
    
    console.log(list.search(50));
    console.log(list.search(60));
}

function dLLTests()
{
    list = new DLinkedList();

    list.append(24);
    list.append(48);
    list.append(96);
    list.append(100);
    list.insert(12);
    list.insert(6);
    list.insert(36);
    list.insert(40);
    list.insert(30);
    list.insert(32);
    list.insert(99);
    list.insert(99.5);
    list.insert(98);
    list.insert(8);
    list.insert(7);
    list.insert(9);

    list.display();
    console.log(list);
}

function cSLLTests()
{
    list = new CSLinkedList();

    list.append(24);
    list.append(48);
    list.append(96);
    list.insert(12);
    list.insert(6);
    list.insert(60);
    list.insert(99);
    list.insert(100);
    list.insert(8);

    list.display();
    console.log(list);
}

function main()
{
    // sLLTests();
    // dLLTests();
    cSLLTests();
}

main();