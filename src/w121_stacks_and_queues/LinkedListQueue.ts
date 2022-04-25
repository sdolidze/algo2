import { Queue } from "./Queue";

interface Node<T> {
  elem: T;
  next: Node<T> | null;
}

export class LinkedListQueue<T> implements Queue<T> {
  private first: Node<T> | null; // first is always sentinel, first.next is the first element
  private last: Node<T> | null;
  private size: number;

  constructor() {
    this.first = { elem: null as any, next: null };
    this.last = this.first;
    this.size = 0;
  }

  enqueue(elem: T): void {
    this.last!.next = { elem, next: null };
    this.last = this.last!.next;
    this.size++;
  }

  dequeue(): T {
    if (this.size === 0) {
      throw new Error("NoSuchElement");
    }

    const elem = this.first!.next!.elem;
    this.first!.next = this.first!.next!.next;
    this.size--;

    return elem as T;
  }

  peek(): T {
    if (this.size === 0) {
      throw new Error("NoSuchElement");
    }

    return this.first!.next!.elem;
  }

  getSize(): number {
    return this.size;
  }

  isEmpty(): boolean {
    return this.getSize() === 0;
  }
}
