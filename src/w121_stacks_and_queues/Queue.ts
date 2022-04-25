export interface Queue<T> {
  enqueue(elem: T): void;
  dequeue(): T;
  peek(): T;
  getSize(): number;
  isEmpty(): boolean;
}
