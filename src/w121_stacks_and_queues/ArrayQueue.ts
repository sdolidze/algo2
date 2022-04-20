export class ArrayQueue<T> {
  private arr: Array<T | null>;
  private first: number; // index of first element of queue
  private last: number; // index of next available slot
  private size: number;

  constructor() {
    this.arr = new Array<T | null>(2).fill(null);
    this.first = 0;
    this.last = 0;
    this.size = 0;
  }

  enqueue(elem: T): void {
    if (elem === null) {
      throw new Error("ElemIsNull");
    }

    if (this.size == this.arr.length) {
      this.resize(this.size * 2);
    }

    this.arr[this.last] = elem;
    this.last = (this.last + 1) % this.arr.length;
    this.size++;
  }

  dequeue(): T {
    if (this.size == 0) {
      throw new Error("NoSuchElement");
    }

    const elem = this.arr[this.first];
    this.arr[this.first] = null;
    this.size--;
    this.first = (this.first + 1) % this.arr.length;

    if (this.size > 0 && this.size == this.arr.length / 4) {
      this.resize(this.arr.length / 2);
    }

    return elem as T;
  }

  public peek(): T {
    if (this.size == 0) {
      throw new Error("NoSuchElement");
    }

    return this.arr[this.first] as T;
  }

  public getSize(): number {
    return this.size;
  }

  private resize(newSize: number): void {
    const newArr: Array<T | null> = new Array(newSize).fill(null);

    for (let i = 0; i < this.size; i++) {
      newArr[i] = this.arr[(this.first + i) % this.arr.length];
    }

    this.arr = newArr;
    this.first = 0;
    this.last = this.size;
  }
}
