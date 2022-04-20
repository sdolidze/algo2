import { isSorted } from "./isSorted";

export function twoSum(arr: number[], sum: number): number {
  if (!isSorted(arr)) {
    throw new Error("ArrayNotSorted");
  }

  let count = 0;
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    const res = arr[i] + arr[j];

    if (res < sum) {
      i++;
    } else if (res > sum) {
      j--;
    } else {
      count++;
      i++;
      j--;
    }
  }

  return count;
}
