[![Itsy Bitsy Data Structures](https://cloud.githubusercontent.com/assets/952783/21579289/5754b03a-cf75-11e6-976c-f67a271aedaa.png)](itsy-bitsy-data-structures.js)

***Welcome to Itsy Bitsy Data Structures!***

In here are super simplified examples of many of the common data structures
written in easy to read JavaScript.

Reading through the guided code will help you learn about what data structures
are, what their uses are, and how to discuss them.

### [Want to jump into the code? Click here](itsy-bitsy-data-structures.js)

Also be sure to check out my other code walkthrough:
[The Super Tiny Compiler](https://github.com/thejameskyle/the-super-tiny-compiler)

---

### Why should I care?

Data Structures might not be the juiciest topic in the world, but they are
hugely important to growing as an engineer. Knowing data structures don't just
make your programs faster and more efficient, but they help you organize your
code and your thoughts so that you can build more complicated programs without
a ton of mental overhead.

### But data structures are scary!

Yeah, lots of computer science topics are intimidating, and that's largely a
fault of how they are taught. In this we're going to do a high level pass over
a lot of the key things you need to know in order to dive into them deeper.
It's more about introducing you to the shared language of data structures.

### Okay so where do I begin?

Awesome! Head on over to the
[itsy-bitsy-data-structures.js](itsy-bitsy-data-structures.js) file.

### I'm back, that didn't make sense

Ouch, I'm really sorry. I'm planning on doing a lot more work on this to add
inline annotations. If you want to come back when that's done, you can either
watch/star this repo or follow me on
[twitter](https://twitter.com/thejameskyle) for updates.

---

[![cc-by-4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](http://creativecommons.org/licenses/by/4.0/)

1. Every node is either red or black.
2. The root is always black.
3. If a node is red, its children must be black (although the converse isn’t necessarily true).
4. Every path from the root to a leaf, or to a null child, must contain the same number of black nodes.

O(logN)

1. All children in the subtree rooted at child 0 have key values less than key 0.
2. All children in the subtree rooted at child 1 have key values greater than key 0 and less than key 1.
3. All children in the subtree rooted at child 2 have key values greater than key 1 and less than key 2


2-3-4 tree rebalanced

there should be one more child than the data items

way down to the insertion point ==> top-down

A, B, C

C into new node
B into parent
A remains as it is

the last 2 children are attached to the new node
