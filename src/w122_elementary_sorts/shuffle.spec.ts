import { isSorted } from "../w112_analysis_of_algorithms/isSorted";
import { shuffle } from "./shuffle";

describe("shuffle", () => {
  it("shuffle", () => {
    const xs = new Array(1024).fill(null).map((_, i) => i);
    shuffle(xs);
    expect(isSorted(xs)).toBe(false);
  });
});
