/////////////////////////////////////////////////
////////////////VALID PARATHESIS/////////////////
/////////////////////////////////////////////////

function isValid(s) {
    const stack = [];
    const mapping = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else {
            const top = stack.pop();
            if (!top || mapping[top] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

// Example usage:
// console.log(isValid("()")); // Output: true
// console.log(isValid("()[]{}")); // Output: true
// console.log(isValid("(]")); // Output: false
// console.log(isValid("([)]")); // Output: false
// console.log(isValid("{[]()}")); // Output: true

/////////////////////////////////////////////////
////////////////CACHE /////////////////
/////////////////////////////////////////////////

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
        this.head = { key: null, value: null, next: null, prev: null };
        this.tail = { key: null, value: null, next: null, prev: null };
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    get(key) {
        if (!this.cache.has(key)) {
            return -1;
        }

        const node = this.cache.get(key);
        this.moveToHead(node);
        return node.value;
    }

    put(key, value) {
        if (this.cache.has(key)) {
            const node = this.cache.get(key);
            node.value = value;
            this.moveToHead(node);
        } else {
            if (this.cache.size === this.capacity) {
                const tailKey = this.removeTail();
                this.cache.delete(tailKey);
            }
            const newNode = { key, value, next: this.head.next, prev: this.head };
            this.head.next.prev = newNode;
            this.head.next = newNode;
            this.cache.set(key, newNode);
        }
    }

    moveToHead(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next.prev = node;
        this.head.next = node;
    }

    removeTail() {
        const tailKey = this.tail.prev.key;
        this.tail.prev.prev.next = this.tail;
        this.tail.prev = this.tail.prev.prev;
        return tailKey;
    }
}

// Example usage:
const lruCache = new LRUCache(2);
lruCache.put(1, 1);
lruCache.put(2, {2: 'pap'});
console.log(lruCache.get(1)); // Output: 1
lruCache.put(3, 3);
console.log(lruCache.get(2)); // Output: -1 (since 2 was evicted from the cache)
lruCache.put(4, 4);
console.log(lruCache.get(1)); // Output: -1 (since 1 was evicted from the cache)
console.log(lruCache.get(3)); // Output: 3
console.log(lruCache.get(4)); // Output: 4


////////////////////////////////////////////////////////////
/////////////////////BINARY SEARCH TREE/////////////////////
////////////////////////////////////////////////////////////

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        this.root = this._insertRecursively(this.root, value);
    }

    _insertRecursively(root, value) {
        if (root === null) {
            return new TreeNode(value);
        }

        if (value < root.value) {
            root.left = this._insertRecursively(root.left, value);
        } else if (value > root.value) {
            root.right = this._insertRecursively(root.right, value);
        }

        return root;
    }

    search(value) {
        return this._searchRecursively(this.root, value);
    }

    _searchRecursively(node, value) {
        if (node === null || node.value === value) {
            return node;
        }

        if (value < node.value) {
            return this._searchRecursively(node.left, value);
        } else {
            return this._searchRecursively(node.right, value);
        }
    }

    delete(value) {
        this.root = this._deleteRecursively(this.root, value);
    }

    _deleteRecursively(root, value) {
        if (root === null) {
            return null;
        }

        if (value < root.value) {
            root.left = this._deleteRecursively(root.left, value);
        } else if (value > root.value) {
            root.right = this._deleteRecursively(root.right, value);
        } else {
            // Node with only one child or no child
            if (root.left === null) {
                return root.right;
            } else if (root.right === null) {
                return root.left;
            }

            // Node with two children: Get the inorder successor (smallest in the right subtree)
            root.value = this._minValueNode(root.right).value;

            // Delete the inorder successor
            root.right = this._deleteRecursively(root.right, root.value);
        }

        return root;
    }

    _minValueNode(node) {
        let current = node;
        while (current.left !== null) {
            current = current.left;
        }
        return current;
    }
}

// Example usage:
const bst = new BinarySearchTree();
bst.insert(50);
bst.insert(30);
bst.insert(20);
bst.insert(40);
bst.insert(70);
bst.insert(60);
bst.insert(80);

console.log(bst.search(20)); // Output: TreeNode { value: 20, left: null, right: null }
console.log(bst.search(25)); // Output: null

bst.delete(20);
console.log(bst.search(20)); // Output: null

//////////////////////////////////////////////
///////////////QUEUE//////////////////////////
//////////////////////////////////////////////

class Queue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    enqueue(item) {
        this.stack1.push(item);
    }

    dequeue() {
        if (this.stack2.length === 0) {
            if (this.stack1.length === 0) {
                return null; // Queue is empty
            }
            // Move elements from stack1 to stack2
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
    }

    peek() {
        if (this.stack2.length === 0) {
            if (this.stack1.length === 0) {
                return null; // Queue is empty
            }
            // Move elements from stack1 to stack2
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2[this.stack2.length - 1];
    }

    isEmpty() {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }
}

// Example usage:
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.peek()); // Output: 1
console.log(queue.dequeue()); // Output: 1
console.log(queue.peek()); // Output: 2
console.log(queue.isEmpty()); // Output: false
