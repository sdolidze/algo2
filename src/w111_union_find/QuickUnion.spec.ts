import { QuickUnion } from "./QuickUnion";

describe("QuickUnion", () => {
  it("QuickUnion", () => {
    const uf = new QuickUnion(3);

    expect(uf.connected(0, 1)).toBe(false);
    expect(uf.connected(0, 2)).toBe(false);

    uf.union(0, 1);

    expect(uf.connected(0, 1)).toBe(true);
    expect(uf.connected(0, 2)).toBe(false);

    uf.union(1, 2);

    expect(uf.connected(0, 1)).toBe(true);
    expect(uf.connected(0, 2)).toBe(true);
  });
});
