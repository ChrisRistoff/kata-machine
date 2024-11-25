class Node<T> {
    public value: T;
    public next?: Node<T>;

    constructor(value: T) {
        this.value = value;
    }
}

export default class Stack<T> {
    public length: number;
    public head?: Node<T>;
    public tail?: Node<T>;

    constructor() {
        this.length = 0
        this.head = this.tail = undefined;
    }

    push(item: T): void {
        const newNode = new Node(item);

        this.length++;

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        }

        newNode.next = this.head;
        this.head = newNode;
    }

    pop(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        this.length--;
        const val = this.head.value;

        if (!this.length) {
            this.head = this.tail = undefined;
            return val;
        }

        this.head = this.head.next;

        return val;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
