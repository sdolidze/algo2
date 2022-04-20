import { binarySearch } from "./binarySearch";

describe("binarySearch", () => {
  it("should work", () => {
    const arr = [0, 4, 5, 6, 12, 65, 90];

    expect(binarySearch(arr, 0)).toBe(0);
    expect(binarySearch(arr, 90)).toBe(6);
    expect(binarySearch(arr, 6)).toBe(3);
    expect(binarySearch(arr, 20)).toBe(-1);
  });
});
