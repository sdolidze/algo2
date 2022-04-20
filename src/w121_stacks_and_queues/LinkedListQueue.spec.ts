import { LinkedListQueue } from "./LinkedListQueue";

describe("LinkedListQueue", () => {
  it("LinkedListQueue", () => {
    const queue = new LinkedListQueue();

    for (let i = 0; i < 1024; i++) {
      queue.enqueue(i);
    }

    for (let i = 0; i < 1024; i++) {
      expect(queue.dequeue()).toBe(i);
    }

    expect(queue.getSize()).toBe(0);
  });
});
