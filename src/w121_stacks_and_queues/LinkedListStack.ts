import { Stack } from "./Stack";

interface Node<T> {
  elem: T;
  next: Node<T> | null;
}

export class LinkedListStack<T> implements Stack<T> {
  private root: Node<T> | null;
  private size: number;

  constructor() {
    this.root = null;
    this.size = 0;
  }

  push(elem: T): void {
    this.root = {
      elem: elem,
      next: this.root,
    };

    this.size++;
  }

  pop(): T {
    if (this.root === null) {
      throw new Error("EmptyStack");
    }

    const temp = this.root.elem;

    this.root = this.root.next;
    this.size--;

    return temp;
  }

  peek(): T {
    if (this.root === null) {
      throw new Error("EmptyStack");
    }

    return this.root.elem;
  }

  getSize(): number {
    return this.size;
  }
}
