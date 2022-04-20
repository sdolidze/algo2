import { ArrayQueue } from "./ArrayQueue";

describe("ArrayQueue", () => {
  it("ArrayQueue", () => {
    const queue = new ArrayQueue();

    for (let i = 0; i < 1024; i++) {
      queue.enqueue(i);
    }

    for (let i = 0; i < 1024; i++) {
      expect(queue.dequeue()).toBe(i);
    }

    expect(queue.getSize()).toBe(0);
  });
});
