import { ArrayStack } from "./ArrayStack";

describe("ArrayStack", () => {
  it("ArrayStack", () => {
    const stack = new ArrayStack();

    for (let i = 0; i < 1024; i++) {
      stack.push(i);
    }

    for (let i = 1023; i >= 0; i--) {
      expect(stack.pop()).toBe(i);
    }

    expect(stack.getSize()).toBe(0);
  });
});
