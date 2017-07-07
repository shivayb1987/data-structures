'use strict';

const assert = require('assert');
const {
  List,
  Hashtable,
  Stack,
  Queue,
  Graph,
  LinkedList,
  DoublyLinkedList,
  Tree,
  BinarySearchTree,
} = require('./itsy-bitsy-data-structures');

/**
 * ============================================================================
 * ,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'
 * ============================================================================
 */

(function() {
  var list = new List();

  list.push(1);
  list.unshift(2);

  assert.equal(list.get(1), 1);
  assert.equal(list.get(0), 2);

  assert.equal(list.shift(), 2);
  assert.equal(list.get(0), 1);

  assert.equal(list.pop(), 1);
  assert.equal(list.get(0), undefined);
}());

/**
 * ============================================================================
 * ,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'
 * ============================================================================
 */

(function() {
  var hashTable = new Hashtable();

  hashTable.put('foo', 'bar');
  assert.equal(hashTable.get('foo'), 'bar');

  hashTable.remove('foo');
  assert.equal(hashTable.get('foo'), undefined);
}());

/**
 * ============================================================================
 * ,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'
 * ============================================================================
 */

(function() {
  var stack = new Stack();

  stack.push(1);
  stack.push(2);

  assert.equal(stack.peek(), 2);
  assert.equal(stack.pop(), 2);
  assert.equal(stack.peek(), 1);
  assert.equal(stack.pop(), 1);
}());

/**
 * ============================================================================
 * ,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'
 * ============================================================================
 */

(function() {
  var queue = new Queue();

  queue.enqueue(1);
  queue.enqueue(2);

  assert.equal(queue.peek(), 1);
  assert.equal(queue.dequeue(), 1);
  assert.equal(queue.peek(), 2);
  assert.equal(queue.dequeue(), 2);
}());

/**
 * ============================================================================
 * ,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'
 * ============================================================================
 */

(function() {
  var graph = new Graph();

  graph.addNode(1);
  graph.addNode(2);
  graph.addNode(3);

  assert.equal(graph.find(1).value, 1);
  assert.equal(graph.find(2).value, 2);

  graph.addLine(1, 2);
  graph.addLine(1, 3);
  graph.addLine(2, 3);

  assert.equal(graph.find(1).lines[0].value, 2);
  assert.equal(graph.find(1).lines[1].value, 3);
  assert.equal(graph.find(2).lines[0].value, 3);
}());

/**
 * ============================================================================
 * ,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'
 * ============================================================================
 */

(function() {
  var linkedList = new LinkedList();

  linkedList.add(1, 0);
  linkedList.add(2, 1);
  linkedList.add(3, 2);
  linkedList.add(4, 3);

  assert.equal(linkedList.get(0).value, 1);
  assert.equal(linkedList.get(1).value, 2);

  linkedList.remove(1);
  assert.equal(linkedList.get(1).value, 3);

  linkedList.remove(2);
  assert.equal(linkedList.get(1).value, 3);

  linkedList.remove(0);
  assert.equal(linkedList.get(0).value, 3);
}());

/**
 * ============================================================================
 * ,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'
 * ============================================================================
 */

 (function() {
  var doublyLinkedList = new DoublyLinkedList();

  doublyLinkedList.add(1, 0);
  doublyLinkedList.add(2, 1);
  doublyLinkedList.add(3, 2);
  doublyLinkedList.add(4, 3);

  assert.equal(doublyLinkedList.get(0).value, 1);
  assert.equal(doublyLinkedList.get(1).value, 2);

  doublyLinkedList.remove(1);
  assert.equal(doublyLinkedList.get(1).value, 3);

  doublyLinkedList.remove(2);
  assert.equal(doublyLinkedList.get(1).value, 3);

  doublyLinkedList.remove(0);
  assert.equal(doublyLinkedList.get(0).value, 3);
}());

/**
 * ============================================================================
 * ,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'
 * ============================================================================
 */

(function() {
  var tree = new Tree();

  tree.add(1);
  tree.add(2, 1);
  tree.add(3, 1);
  tree.add(4, 2);
  tree.add(5, 2);
  tree.add(6, 3);
  tree.add(7, 3);

  var traversed = [];
  tree.traverse(function(node) {
    traversed.push(node.value);
  });

  var traversedDF = [];
  tree.traverseDF(node => {
    traversedDF.push(node.value);
  });
    var traversedBF = [];
  tree.traverseBF(node => {
    traversedBF.push(node.value);
  });
  assert.deepEqual(traversed, [1, 2, 4, 5, 3, 6, 7]);
  assert.deepEqual(traversedDF, [4, 5, 2, 6, 7, 3, 1]);
  assert.deepEqual(traversedBF, [1, 2, 3, 4, 5, 6, 7]);
  tree.remove(2, 1);
  traversed = [];
  tree.traverse(function(node) {
    traversed.push(node.value);
  });
  // tree.traverseBF(node => console.log(node.value));
  assert.deepEqual(traversed, [1, 3, 6, 7]);
}());

/**
 * ============================================================================
 * ,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'`'-.,.-'
 * ============================================================================
 */

(function() {
  var binarySearchTree = new BinarySearchTree();

  // root
  binarySearchTree.add(4);

  // left side
  binarySearchTree.add(2);
  binarySearchTree.add(1);
  binarySearchTree.add(3);

  // right side
  binarySearchTree.add(6);
  binarySearchTree.add(5);
  binarySearchTree.add(7);

  assert.ok(binarySearchTree.contains(2));
  assert.ok(binarySearchTree.contains(3));
  assert.ok(binarySearchTree.contains(4));
  assert.equal(binarySearchTree.maximum(), 7)
  assert.equal(binarySearchTree.minimum(), 1)
  binarySearchTree.delete(2);
  assert.ok(!binarySearchTree.contains(2));

  binarySearchTree.delete(3);
  binarySearchTree.delete(7);

  assert.equal(binarySearchTree.depth(binarySearchTree.root), 3);

  // duplicate
  binarySearchTree.add(6);
}());
