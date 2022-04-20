// import { isSorted } from "../w112_analysis_of_algorithms/isSorted";
// import { heapSort } from "./heapSort";

import { BinarySearchTree } from "./BinarySearchTree";

describe("BinarySearchTree", () => {
  it("size", () => {
    const tree = new BinarySearchTree();
    expect(tree.size()).toBe(0);

    tree.put("b", "b");
    expect(tree.size()).toBe(1);

    tree.put("c", "c");
    expect(tree.size()).toBe(2);

    tree.put("a", "a");
    expect(tree.size()).toBe(3);
  });

  it("isEmpty", () => {
    const tree = new BinarySearchTree();
    expect(tree.isEmpty()).toBe(true);

    tree.put("b", "b");
    expect(tree.isEmpty()).toBe(false);
  });

  it("min", () => {
    const tree = new BinarySearchTree();
    expect(tree.min()).toBe(null);

    tree.put("b", "b");
    expect(tree.min()).toBe("b");

    tree.put("c", "c");
    expect(tree.min()).toBe("b");

    tree.put("a", "a");
    expect(tree.min()).toBe("a");
  });

  it("max", () => {
    const tree = new BinarySearchTree();
    expect(tree.max()).toBe(null);

    tree.put("b", "b");
    expect(tree.max()).toBe("b");

    tree.put("c", "c");
    expect(tree.max()).toBe("c");

    tree.put("a", "a");
    expect(tree.max()).toBe("c");
  });
});
