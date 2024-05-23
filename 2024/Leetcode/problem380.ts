class RandomizedSet {
    // Space Complexity: O(n) = 3n = 2n = 1n
    arr: number[];
    locations: Map<number, number>;

    constructor() {
        this.arr = [];
        this.locations = new Map();
    }

    insert(val: number): boolean {
        if (this.locations.has(val)) {
            return false;
        }

        this.locations.set(val, this.arr.length);
        this.arr.push(val);
        return true;
    }

    remove(val: number): boolean {
        if (!this.locations.has(val)) {
            return false;
        }

        let index = this.locations.get(val);

        /*
        let a = 24;
        let b = 48;
        [a, b] = [b, a];
        */

        let temp = this.arr[index];
        this.arr[index] = this.arr[this.arr.length - 1];
        this.arr[this.arr.length - 1] = temp;

        // [this.arr[index], this.arr[this.arr.length - 1]] = [this.arr[this.arr.length - 1], this.arr[index]]

        this.locations.set(this.arr[index], index);
        
        this.locations.delete(val);
        this.arr.pop();
        return true;
    }

    getRandom(): number {
        return this.arr[Math.floor(Math.random() * this.arr.length)];
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */