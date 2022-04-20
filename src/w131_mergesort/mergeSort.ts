export function mergeSort(arr: number[]): void {
  sort(arr, new Array(arr.length).fill(0), 0, arr.length - 1);
}

export function sort(arr: number[], aux: number[], lo: number, hi: number): void {
  if (lo >= hi) {
    return;
  }

  const mid = (lo + hi) / 2;
  sort(arr, aux, lo, mid);
  sort(arr, aux, mid + 1, hi);
  merge(arr, aux, lo, mid, hi);
}

export function merge(arr: number[], aux: number[], lo: number, mid: number, hi: number): void {
  // assert isSorted(arr, lo, mid);
  // assert isSorted(arr, mid + 1, hi);

  for (let i = lo; i <= hi; i++) {
    aux[i] = arr[i];
  }

  let left = lo;
  let right = mid + 1;

  for (let i = lo; i <= hi; i++) {
    if (left > mid) {
      // left is empty
      arr[i] = aux[right++];
    } else if (right > hi) {
      // right is empty
      arr[i] = aux[left++];
    } else if (aux[left] > aux[right]) {
      arr[i] = aux[right++];
    } /* aux[left] <= aux[right] */ else {
      arr[i] = aux[left++];
    }
  }

  // assert isSorted(arr, lo, hi);
}
