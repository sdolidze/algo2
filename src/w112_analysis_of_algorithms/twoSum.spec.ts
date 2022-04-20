import { twoSum } from "./twoSum";

describe("twoSum", () => {
  it("twoSum", () => {
    expect(twoSum([], 0)).toBe(0);
    expect(twoSum([-1, 1], 0)).toBe(1);
    expect(twoSum([-3, -1, 1, 3], 0)).toBe(2);
  });
});
