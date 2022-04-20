export interface Stack<T> {
  push(elem: T): void;
  pop(): T;
  peek(): T;
  getSize(): number;
}
