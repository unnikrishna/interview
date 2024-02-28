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
