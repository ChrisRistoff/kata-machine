class Node<T> {
    public value: T;
    public next?: Node<T>;

    constructor(value: T) {
        this.value = value;
    }
}

export default class Queue<T> {
    public length: number;
    private head?: Node<T>
    private tail?: Node<T>

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    enqueue(item: T): void {
        const newNode = new Node(item);
        this.length++;

        if (!this.tail) {
            this.tail = this.head = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    deque(): T | undefined {
        if (!this.head) {
            return;
        }

        this.length--;

        const head = this.head;
        this.head = this.head.next ? this.head.next : this.tail = undefined;

        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
