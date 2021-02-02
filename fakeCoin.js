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

            // this.ledger.add(this.account.historyHead);
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
    for (let i = 1; i < 3; i++) {
        miners.push(new Miner(accountCounter++, 1000 * i + 1000, transactionCounter++, miners[0]));
        if (i == 3) {
            miners[1].add(miners[2].historyHead);
        }
    }

    for (let i = 0; i < 3; i++) {
        console.log(miners[i].ledger);
        console.log("\n\n");
    }

    for (let i = 0; i < 3; i++) {
        console.log(miners[i].account);
        console.log("\n\n");
    }
}

main();
