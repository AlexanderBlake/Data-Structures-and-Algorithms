class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class Tree {
	constructor () {
		this.root = null;
	}

	insert(value) {
		if (!this.root) {
			this.root = new Node(value);
		} else {
			let current = this.root;
			let inserted = false;

			do {
				if (current.value < value) {
					if (current.right) {
						current = current.right;
					} else {
						current.right = new Node(value);
						inserted = true;
					}
				} else {
					if (current.left) {
						current = current.left;
					} else {
						current.left = new Node(value);
						inserted = true;
					}
				}
			} while (!inserted);
		}
	}

	inOrder(current = this.root) {
		if (current === null) {
			return;
		}
		this.inOrder(current.left);
		console.log(current.value);
		this.inOrder(current.right);
	}
}

function main() {
	/*
	let a = 24;
	let b = 48;

	let temp = b;
	b = a;
	a = temp;

	a += b;
	b = a - b;
	a -= b;
	*/

	bst = new Tree();
	bst.insert(15);
	bst.insert(6);
	bst.insert(4);
	bst.insert(5);
	bst.insert(7);
	bst.insert(23);
	bst.insert(71);
	bst.insert(50);

	bst.inOrder();

}

main();