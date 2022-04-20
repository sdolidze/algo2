import { isSorted } from "./isSorted";

describe("isSorted", () => {
  it("isSorted", () => {
    expect(isSorted([])).toBe(true);
    expect(isSorted([1])).toBe(true);
    expect(isSorted([1, 2])).toBe(true);
    expect(isSorted([1, 2, 1])).toBe(false);
    expect(isSorted([3, 2, 1])).toBe(false);
  });
});
