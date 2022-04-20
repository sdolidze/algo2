import { BinaryHeapPriorityQueue } from "./BinaryHeapPriorityQueue";

describe("BinaryHeapPriorityQueue", () => {
  it("BinaryHeapPriorityQueue", () => {
    const priorityQueue = new BinaryHeapPriorityQueue(16);

    priorityQueue.insert(5);
    priorityQueue.insert(10);
    priorityQueue.insert(1);

    const arr = [];

    arr.push(priorityQueue.delMax());
    arr.push(priorityQueue.delMax());
    arr.push(priorityQueue.delMax());

    expect(arr).toEqual([10, 5, 1]);
  });
});
