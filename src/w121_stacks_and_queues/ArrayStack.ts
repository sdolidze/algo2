import { Stack } from "./Stack";

export class ArrayStack<T> implements Stack<T> {
  private xs: Array<T | null>;
  private size: number;

  constructor() {
    this.xs = new Array(2).fill(null);
    this.size = 0;
  }

  push(elem: T): void {
    if (this.size == this.xs.length) {
      this.resize(this.size * 2);
    }

    this.xs[this.size++] = elem;
  }

  pop(): T {
    if (this.size === 0) {
      throw new Error("EmptyStack");
    }

    const temp = this.xs[this.size - 1];
    this.xs[this.size - 1] = null;
    this.size--;

    // avoid thrashing, invariant: array is between 25% and 100% full
    if (this.size > 0 && this.size == this.xs.length / 4) {
      this.resize(this.xs.length / 2);
    }

    return temp as T;
  }

  peek(): T {
    return this.xs[this.size - 1] as T;
  }

  getSize(): number {
    return this.size;
  }

  private resize(newSize: number): void {
    const newArr = new Array(newSize).fill(null);

    for (let i = 0; i < this.size; i++) {
      newArr[i] = this.xs[i];
    }

    this.xs = newArr;
  }
}
