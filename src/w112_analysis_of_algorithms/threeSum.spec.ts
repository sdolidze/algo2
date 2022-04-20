import { threeSumCubic, threeSumQuadratic } from "./threeSum";

describe("threeSum", () => {
  it("threeSumCubic", () => {
    expect(threeSumCubic([])).toBe(0);
    expect(threeSumCubic([-2, 1, 1])).toBe(1);
    expect(threeSumCubic([-2, -2, -1, 1, 1, 3])).toBe(4);
  });

  it("threeSumQuadratic", () => {
    expect(threeSumQuadratic([])).toBe(0);
    expect(threeSumQuadratic([-2, 1, 1])).toBe(1);
    expect(threeSumQuadratic([-2, -2, -1, 1, 1, 3])).toBe(4);
  });
});
