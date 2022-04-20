import { swap } from "./swap";

export function insertionSort(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j - 1] > arr[j]) {
        swap(arr, j - 1, j);
      } else {
        break;
      }
    }
  }
}
