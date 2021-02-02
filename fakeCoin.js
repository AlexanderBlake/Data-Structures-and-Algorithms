class FakeCoin {
    constructor() {
        this.miners = null;
        this.accounts = null;
    }
}

class Miner {
    constructor(id, balance) {
        this.account = new Account(id, balance);
        this.ledger = new Blockchain();
    }

    add(transaction) {
        this.ledger.add(transaction);
    }
}

class Account {
    constructor(accountID, balance, transactionID, miner) {
        this.id = accountID;
        this.balance = balance;
        this.historyHead = new Transaction(transactionID, accountID, accountID, balance);

        miner.add(this.historyHead);
    }
}

class Blockchain {
    constructor() {
        this.head = null;
        this.mostRecent = null;
    }

    add(transaction) {
        if (!this.head) {
            this.head = transaction;
        }
    }

    copy() {

    }
}

class Transaction {
    constructor(id, payerID, receiverID, amount) {
        this.id = id;
        this.payerID = payerID;
        this.receiverID = receiverID;
        this.amount = amount;
    }
}

function main() {
    let transactionCounter = 1;
    let accountCounter = 1;


}

main();
