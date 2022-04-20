export class BinaryHeapPriorityQueue<T> {
  private arr: Array<T | null>;
  private size: number;

  constructor(capacity: number) {
    this.arr = new Array(capacity + 1).fill(null);
    this.size = 0;
  }

  public insert(elem: T): void {
    this.arr[this.size + 1] = elem;
    this.swim(this.size + 1);
    this.size++;
  }

  public delMax(): T {
    const max = this.arr[1];
    this.arr[1] = this.arr[this.size];
    this.arr[this.size] = null;
    this.size--;
    this.sink(1);

    return max!;
  }

  private swim(child: number): void {
    while (child > 1 && this.less(child / 2, child)) {
      this.swap(child, child / 2);
      child /= 2;
    }
  }

  private swap(i: number, j: number): void {
    const temp = this.arr[i];
    this.arr[i] = this.arr[j];
    this.arr[j] = temp;
  }

  private sink(k: number): void {
    // we use "<=" because indexing starts at 1, not 0
    while (2 * k <= this.size) {
      const maxChild = this.maxChild(k);

      if (!this.less(k, maxChild)) {
        break;
      }

      this.swap(k, maxChild);
      k = maxChild;
    }
  }

  private less(i: number, j: number): boolean {
    return this.arr[i]! < this.arr[j]!;
  }

  private maxChild(k: number): number {
    const j = 2 * k;

    if (j < this.size && this.less(j, j + 1)) {
      return j + 1;
    } else {
      return j;
    }
  }

  max(): T {
    if (this.size === 0) {
      throw new Error("NoSuchElement");
    }

    return this.arr[1]!; // largest element in heap
  }

  getSize(): number {
    return this.size;
  }
}
