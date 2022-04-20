import { isSorted } from "../w112_analysis_of_algorithms/isSorted";
import { insertionSort } from "./insertionSort";

describe("insertionSort", () => {
  it("insertionSort", () => {
    const xss = [
      [7, 6, -1, 5, 123, 4, 3, 2, 1],
      [7, 6, 5, 4, 3, 2, 1],
      [1, 2, 3, 4, 5, 6],
      [9, 3, 4, 1, 3],
      [0, 1, 0],
      [0],
      [],
    ];

    for (const xs of xss) {
      const arr = [...xs];
      insertionSort(arr);
      expect(isSorted(arr)).toBe(true);
    }
  });
});
