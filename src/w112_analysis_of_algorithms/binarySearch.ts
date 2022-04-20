export function binarySearch(arr: number[], key: number): number {
  let lo = 0;
  let hi = arr.length - 1;

  while (lo <= hi) {
    const mid = lo + (hi - lo) / 2;

    if (key < arr[mid]) {
      hi = mid - 1;
    } else if (key > arr[mid]) {
      lo = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
}
