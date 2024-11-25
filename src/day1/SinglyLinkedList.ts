import { idText } from "typescript";

class Node<T> {
    public value: T;
    public next?: Node<T>;

    constructor(value: T) {
        this.value = value;
    }
}

export default class SinglyLinkedList<T> {
    public length: number;
    public head?: Node<T>;
    public tail?: Node<T>;

    constructor() {
        this.length = 0
        this.head = this.tail = undefined;
    }

    prepend(item: T): void {
        const newNode = new Node(item);
        this.length++;

        if (!this.head) {
            this.head = this.tail = newNode;
        }

        newNode.next = this.head;
        this.head = newNode;
    }

    insertAt(item: T, idx: number): void {

    }

    append(item: T): void {

    }

    remove(item: T): T | undefined {
        return item;
    }

    get(idx: number): T | undefined {
        return undefined;
    }

    removeAt(idx: number): T | undefined {
        return undefined
    }
}

const newList = new SinglyLinkedList();

newList.prepend(3);
newList.prepend(1);
newList.insertAt(5, 3);

console.log(newList)
