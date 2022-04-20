export interface PriorityQueue<T> {
  insert(elem: T): void;
  delMax(): T;
  max(): T;
  getSize(): number;
}
