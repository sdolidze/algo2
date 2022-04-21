import { BinarySearchTree } from "./BinarySearchTree";

function makeTree(type: "empty" | "alpha" | "beta" = "empty"): BinarySearchTree {
  const tree = new BinarySearchTree();

  switch (type) {
    case "empty": {
      //noop
      break;
    }
    case "alpha": {
      // ["a", "b", "c", "d", "e"];
      tree.put("d", "d");
      tree.put("b", "b");
      tree.put("c", "c");
      tree.put("a", "a");
      tree.put("e", "e");
      break;
    }
    case "beta": {
      // ["a", "c", "e", "g", "i"];
      tree.put("g", "g");
      tree.put("a", "a");
      tree.put("e", "e");
      tree.put("i", "i");
      tree.put("c", "c");
      break;
    }
  }

  return tree;
}

describe("BinarySearchTree", () => {
  it("size", () => {
    const tree = makeTree();
    expect(tree.size()).toBe(0);

    tree.put("b", "b");
    expect(tree.size()).toBe(1);

    tree.put("c", "c");
    expect(tree.size()).toBe(2);

    tree.put("a", "a");
    expect(tree.size()).toBe(3);
  });

  it("sizeRange", () => {
    const tree = makeTree("alpha");

    expect(tree.sizeRange("x", "y")).toBe(0);
    expect(tree.sizeRange("b", "b")).toBe(1);
    expect(tree.sizeRange("b", "d")).toBe(3);
    expect(tree.sizeRange("a", "e")).toBe(5);
  });

  it("isEmpty", () => {
    const tree = makeTree();
    expect(tree.isEmpty()).toBe(true);

    tree.put("b", "b");
    expect(tree.isEmpty()).toBe(false);
  });

  it("min", () => {
    const tree = makeTree();
    expect(tree.min()).toBe(null);

    tree.put("b", "b");
    expect(tree.min()).toBe("b");

    tree.put("c", "c");
    expect(tree.min()).toBe("b");

    tree.put("a", "a");
    expect(tree.min()).toBe("a");
  });

  it("max", () => {
    const tree = makeTree();
    expect(tree.max()).toBe(null);

    tree.put("b", "b");
    expect(tree.max()).toBe("b");

    tree.put("c", "c");
    expect(tree.max()).toBe("c");

    tree.put("a", "a");
    expect(tree.max()).toBe("c");
  });

  it("removeMin", () => {
    const tree = makeTree("alpha");

    expect(tree.min()).toBe("a");
    tree.removeMin();

    expect(tree.min()).toBe("b");
    tree.removeMin();

    expect(tree.min()).toBe("c");
    tree.removeMin();

    expect(tree.min()).toBe("d");
    tree.removeMin();

    expect(tree.min()).toBe("e");
    tree.removeMin();
  });

  it("removeMax", () => {
    const tree = makeTree("alpha");

    expect(tree.max()).toBe("e");
    tree.removeMax();

    expect(tree.max()).toBe("d");
    tree.removeMax();

    expect(tree.max()).toBe("c");
    tree.removeMax();

    expect(tree.max()).toBe("b");
    tree.removeMax();

    expect(tree.max()).toBe("a");
    tree.removeMax();
  });

  it("floor", () => {
    const tree = makeTree("beta");

    expect(tree.floor("0")).toBe(null);
    expect(tree.floor("a")).toBe("a");
    expect(tree.floor("b")).toBe("a");
    expect(tree.floor("c")).toBe("c");
    expect(tree.floor("d")).toBe("c");
    expect(tree.floor("e")).toBe("e");
    expect(tree.floor("f")).toBe("e");
  });

  it("ceiling", () => {
    const tree = makeTree("beta");

    expect(tree.ceiling("0")).toBe("a");
    expect(tree.ceiling("a")).toBe("a");
    expect(tree.ceiling("b")).toBe("c");
    expect(tree.ceiling("c")).toBe("c");
    expect(tree.ceiling("d")).toBe("e");
    expect(tree.ceiling("e")).toBe("e");
    expect(tree.ceiling("f")).toBe("g");
    expect(tree.ceiling("j")).toBe(null);
  });

  it("rank", () => {
    const t1 = makeTree("alpha");

    expect(t1.rank("a")).toBe(0);
    expect(t1.rank("b")).toBe(1);
    expect(t1.rank("c")).toBe(2);
    expect(t1.rank("d")).toBe(3);
    expect(t1.rank("e")).toBe(4);

    const t2 = makeTree("beta");

    expect(t2.rank("a")).toBe(0);
    expect(t2.rank("c")).toBe(1);
    expect(t2.rank("e")).toBe(2);
    expect(t2.rank("g")).toBe(3);
    expect(t2.rank("i")).toBe(4);
  });

  it("put", () => {
    const tree = makeTree();

    expect(tree.get("a")).toBe(null);
    tree.put("a", "a");
    expect(tree.get("a")).toBe("a");

    expect(tree.get("b")).toBe(null);
    tree.put("b", "b");
    expect(tree.get("b")).toBe("b");

    expect(tree.get("c")).toBe(null);
    tree.put("c", "c");
    expect(tree.get("c")).toBe("c");
  });

  it("remove", () => {
    const tree = makeTree();

    expect(tree.get("a")).toBe(null);
    tree.put("a", "a");
    expect(tree.get("a")).toBe("a");
    tree.remove("a");
    expect(tree.get("a")).toBe(null);

    // noop
    tree.remove("x");
  });

  it("get", () => {
    const tree = makeTree();
    expect(tree.get("a")).toBe(null);

    tree.put("a", "[value]");
    expect(tree.get("a")).toBe("[value]");

    tree.remove("a");
    expect(tree.get("a")).toBe(null);
  });

  it("contains", () => {
    const tree = makeTree();
    expect(tree.contains("a")).toBe(false);

    tree.put("a", "a");
    expect(tree.contains("a")).toBe(true);

    tree.remove("a");
    expect(tree.contains("a")).toBe(false);
  });

  it("keys", () => {
    const tree = makeTree("alpha");
    expect(tree.keys()).toEqual(["a", "b", "c", "d", "e"]);
  });

  it("keyRange", () => {
    const tree = makeTree("alpha");
    expect(tree.keyRange("b", "d")).toEqual(["b", "c", "d"]);
  });
});
