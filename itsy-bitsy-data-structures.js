'use strict';


var forLoop = require('./forLoop');
/* List 
	get(address) => value
	push(value)
	pop() => value
	shift() => value
	unshift()
*/

var max = function (x, y) {
	return x > y ? x : y;
};

class List {
	constructor () {
		this.memory = [];
		this.length = 0;
	}

	get (address) {
		return this.memory[address];
	}

	push (value) {
		this.memory[this.length] = value;
		this.length++;
	}

	pop () {
		let value = this.memory[this.length-1];
		delete this.memory[this.length-1];
		this.length--;
		return value;
	}

	unshift (value) {
		let previous= value;
		forLoop(this.length, (i) => {
			[previous, this.memory[i]] = [this.memory[i], previous];
		});
		this.memory[this.length] = previous;
		this.length++;
	}

	shift () {
		let value = this.memory[0];
		forLoop(this.length, (i) => {
			this.memory[i] = this.memory[i+1];
		});
		delete this.memory[this.length-1];
		this.length--;
		return value;
	}
}


/*
	Hash Table
		hashCode(key) --> hash
		get(key) -> value
		put(key, value)
		remove(key)
*/

class Hashtable {
	constructor () {
		this.memory = [];
	}

	hashCode (key) {
		let hash = 0;
		forLoop(key.length, (i) => {
			let code = key.charCodeAt(i) || 0;
			hash = (hash << 5) - hash;
			hash += code;
		})
		return hash;
	}

	get (key) {
		return this.memory[this.hashCode(key)];
	}

	put (key,value) {
		let hash = this.hashCode(key);
		this.memory[hash] = value;
	}

	remove (key) {
		let hash = this.hashCode(key);
		if (!!this.memory[hash]) {
			delete this.memory[hash];
		}
	}

}

/* Stack *
* push(value)
* pop()
* peek()
*/

class Stack {
	constructor () {
		this.list = [];
		this.length = 0;
	}

	push (value) {
		this.length++;
		this.list.push(value);
	}

	pop () {
		this.length--;
		return this.list.pop();
	}

	peek () {
		return this.list[this.length-1];
	}
}



/* Queue *
* enqueue(value)
* dequeue()
* peek()
*/
class Queue {
	constructor () {
		this.list = [];
	}

	enqueue (value) {
		this.list.push(value);
	}

	dequeue () {
		return this.list.shift();
	}

	peek () {
		return this.list[0];
	}
}
/*
	Graph = {
		nodes: [
			{
				1,
				lines: []
			},
			{
				2,
				lines: []
			}
		]
	}
	find(value)
	addNode(value)
	addLine(startValue, endValue)
*/

class Graph {
	constructor () {
		this.nodes = [];
	}

	find (value) {
		return this.nodes.find(node => 
			node.value === value);
	}

	addNode (value) {
		this.nodes.push({
			value,
			lines: []
		});
	}

	addLine (startValue, endValue) {
		let startNode = this.find(startValue);
		let endNode = this.find(endValue);

		if (!startNode || !endNode) {
			throw new Error('Both nodes need to exist');
		}

		startNode.lines.push(endNode);
	}
}

/* Linked List 
* get(position)
* add(value, position)
* remove(position)
*/
class LinkedList {
	constructor () {
		this.head = null;
		this.length = 0;
	}

	get (position) {
		if (position > this.length) {
			throw new Error('Position cannot exceed the length');
		}

		let current = this.head;
		forLoop(position, () => {
			current = current.next;
		});
		return current;
	}

	add (value, position) {
		let node = { value, next: null };
		if (position === 0) {
			node.nexxt = this.head;
			this.head = node;
		} else {
			let prev = this.get(position - 1);
			node.next = prev.next;
			prev.next = node;
		}
		this.length++;
	}

	remove (position) {
		if (position === 0) {
			this.head = this.head.next;
		} else {
			let prev = this.get(position - 1);
			let current = prev.next;
			prev.next = current.next;
		}
		this.length--;
	}
}

class DoublyLinkedList {
	constructor () {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	get (position) {
		if (position > this.length) {
			throw new Error('Position cannot exceed the length');
		}

		let current = this.head;
		forLoop(position, () => {
			current = current.next;
		});
		return current;
	}

	add (value) {
		let node = { value, next: null, previous: null };

		if (!this.length) {
			this.head = node;
			this.tail = node;
		} else {
			this.tail.next = node;
			node.previous = this.tail;
			this.tail = node;
		}
		this.length++;
	}

	remove (position) {
		if (position === 0) {
			this.head = this.head.next;
			if (!!this.head) {
				this.head.previous = null;
			}
		} else if (position === this.length - 1) {
			this.tail = this.tail.previous;
			this.tail.next = null;
		} else {
			let prev = this.get(position - 1);
			let current = prev.next;
			let afterCurrent = current.next;

			prev.next = afterCurrent;

			if (!!afterCurrent) {
				afterCurrent.previous = prev;
			}
		}
		this.length--;
	}
}
/* 
	Tree {
		root: {
			value: 1,
			children: [
			{
				value: 2,
				children: [{
					value: 4,
					children: []
				}, {
					value: 5,
					children: []
				}]
			},{
				value: 3, 
				children: [{
					value: 6,
					children: []
				}, {
					value: 7,
					children: []
				}]
			}]
		}
	} 


*/
class Tree {
	constructor () {
		this.root = null;
	}

	traverse (callback) {
		function walk (node) {
			callback(node);
			node.children.forEach(walk);
		}
		walk(this.root);
	}

	traverseDF (callback) {
		function walk (node) {
			node.children.forEach(walk);
			callback(node);
		}
		walk(this.root);
	}

	traverseBF (callback) {
		let queue = new Queue();
		let current = this.root;
		let enqueue = queue.enqueue.bind(queue);
		while (!!current) {
			current.children.forEach(enqueue);
			callback(current);
			current = queue.dequeue();
		}
	}

	add (value, parentValue) {
		let newNode = { value, children: [] };
		if (!this.root) {
			this.root = newNode;
			return;
		}

		this.traverse(node => {
			if (node.value === parentValue) {
				node.children.push(newNode);
			}
		});
	}

	remove (value, parentValue) {
		this.traverse(node => {
			if (node.value === parentValue) {
				node.children = node.children.filter(child => 
					child.value !== value);
			}
		});
	}
}
/** Binary Tree 
*               4
 *           /     \
 *        2           6
 *      /   \       /   \
 *     1     3     5     7
 *    -^--^--^--^--^--^--^-
 *     1  2  3  4  5  6  7
 * contains(value) => boolean
 * add (value)
**/

class BinarySearchTree {
	constructor () {
		this.root = null;
	}

	contains (value) {
		let current = this.root;
		while (!!current) {
			if (value > current.value) {
				current = current.right;
			} else if (value < current.value) {
				current = current.left;
			} else {
				return true;
			}
		}

		return false;
	}

	add (value) {
		let node = { value, left: null, right: null };
		if (!this.root) {
			this.root = node;
			return;
		}
		let current = this.root;
		while (true) {
			if (value > current.value) {
				if (!current.right) {
					current.right = node;
					break;
				}
				current = current.right;
			} else if (value < current.value) {
				if (!current.left) {
					current.left = node;
					break;
				}
				current = current.left;
			} else {
				break;
			}
		}
	}

	maximum () {
		let parent = this.root;
		let current = this.root;

		while (!!current) {
			parent = current;
			current = current.right;
		}

		return parent.value;
	}

	minimum () {
		let parent = this.root;
		let current = this.root;

		while (!!current) {
			parent = current;
			current = current.left;
		}
		return parent.value;
	}

	depth (node) {
		if (!!node) {
			let depth1 = this.depth(node.left);
			let depth2 = this.depth(node.right);
			return 1 + max(depth1, depth2);
		}
		return 0;

	}

	delete (value) {
		let parent = this.root;
		let current = this.root;
		let left = false;

		while (!!current) {
			if (value > current.value) {
				parent = current;
				current = current.right;
				left = false;
			} else if (value < current.value) {
				parent = current;
				current = current.left;
				left = true;
			} else {
				break;
			}
		}

		let config = { parent, current, left};
		if (!current.left && !current.right) {
			this.setNode(null, config);
		} else if (!current.left) {
			this.setNode(current.right, config);
		} else if (!current.right) {
			this.setNode(current.left, config);
		} else {
			let successor = this.getSuccessor(current);
			this.setNode(successor, config);
		}
	}

	setNode (node, { parent, current, left}) {
		if (current === this.root) {
			this.root = node;
		} else if (left) {
			parent.left = node;
		} else {
			parent.right = node;
		}
	}

	getSuccessor (delNode) {
		let successorParent = delNode;
		let successor = delNode;
		let current = delNode.right;

		while (!!current) {
			successorParent = successor;
			successor = current;
			current = current.left;
		}
		if (successor !== delNode.right) {
			successorParent.left = successor.right;
			successor.right = delNode.right;
		}
		return successor;
	}
}

module.exports = {
	List,
	Hashtable,
	Stack,
	Queue,
	Graph,
	LinkedList,
	DoublyLinkedList,
	Tree,
	BinarySearchTree
}

