import { swap } from "../w122_elementary_sorts/swap";

export function quickSort(arr: number[], firstIndex: number = 0, lastIndex: number = arr.length - 1): void {
  if (firstIndex >= lastIndex) {
    return;
  }

  let lo = firstIndex;
  let mid = firstIndex;
  let hi = lastIndex;
  let pivot = arr[firstIndex];

  /* invariant: [start,lo-1]  < pivot
   *            [lo,mid-1]   == pivot
   *            [mid, hi]    [not yet seen]
   *            [hi+1,end]    > pivot
   */

  while (mid <= hi) {
    if (arr[mid] < pivot) {
      swap(arr, mid, lo);
      mid++;
      lo++;
    } else if (arr[mid] > pivot) {
      swap(arr, mid, hi);
      hi--;
    } else {
      mid++;
    }
  }

  quickSort(arr, firstIndex, lo - 1);
  quickSort(arr, hi + 1, lastIndex);

  return;
}
