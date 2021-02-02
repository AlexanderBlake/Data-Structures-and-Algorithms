class Miner {
    constructor(id, balance, transactionID, miner = null) {
        this.account = new Account(id, balance, transactionID, miner);

        if (!miner) {
            this.ledger = new Blockchain();
            this.ledger.add(this.account.historyHead);
        }

        if (miner) {
            this.ledger = new Blockchain();

            let walker = miner.ledger.head;

            while (walker.next) {
                this.ledger.add(walker);
                walker = walker.next;
            }
            this.ledger.add(walker);
        }
    }

    add(transaction) {
        this.ledger.add(transaction);
    }
}

class Account {
    constructor(accountID, balance, transactionID, miner = null) {
        this.id = accountID;
        this.balance = balance;
        this.historyHead = new Transaction(transactionID, accountID, accountID, balance);

        if (miner) {
            miner.add(this.historyHead);
        }
    }
}

class Blockchain {
    constructor() {
        this.head = null;
        this.mostRecentTail = null;
    }

    add(transaction) {
        if (!this.head) {
            this.head = transaction;
            this.mostRecentTail = transaction;
        } else {
            this.mostRecentTail.next = transaction;
            this.mostRecentTail = this.mostRecentTail.next;
        }
    }
}

class Transaction {
    constructor(id, payerID, receiverID, amount) {
        this.id = id;
        this.payerID = payerID;
        this.receiverID = receiverID;
        this.amount = amount;
        this.next = null;
    }
}

function main() {
    let transactionCounter = 1;
    let accountCounter = 1;

    let miners = [];
    miners.push(new Miner(accountCounter++, 100, transactionCounter++));
    miners.push(new Miner(accountCounter++, 100, transactionCounter++, miners[0]));

    console.log(miners[0].ledger);
    console.log("\n\n");
    console.log(miners[1].ledger);

    console.log("\n\n");
    console.log(miners[0].account);
    console.log(miners[1].account);
}

main();
