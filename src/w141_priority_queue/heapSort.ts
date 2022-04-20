// ------------------------------------
// -----------  NOT WORKING -----------
// ------------------------------------

// import { swap } from "../w122_elementary_sorts/swap";

// export function heapSort(arr: number[]): void {
//   const heap: number[] = buildHeap(arr);
//   let size = arr.length;

//   while (size > 0) {
//     arr[size - 1] = heap[1];
//     heap[1] = heap[size];

//     size--;
//     sink(heap, 1, size);
//   }
// }

// function buildHeap(arr: number[]): number[] {
//   const heap: number[] = new Array(arr.length + 1).fill(0);
//   let size: number = 0;

//   for (const num of arr) {
//     heap[size + 1] = num;
//     size++;
//     swim(heap, size, size);
//   }

//   return heap;
// }

// function swim(heap: number[], k: number, size: number): void {
//   while (k > 1 && heap[k / 2] < heap[k]) {
//     swap(heap, k, k / 2);
//     k = k / 2;
//   }
// }

// function sink(heap: number[], k: number, size: number) {
//   while (k * 2 <= size) {
//     let maxChild = k * 2;

//     if (maxChild + 1 <= size && heap[maxChild + 1] > heap[maxChild]) {
//       maxChild++;
//     }

//     if (heap[maxChild] <= heap[k]) {
//       break;
//     }

//     swap(heap, k, maxChild);
//     k = maxChild;
//   }
// }

// ------------------------------------
// -----------  NOT WORKING -----------
// ------------------------------------

// export function heapSort(heap: number[]): void {
//   let size = heap.length;

//   for (let i = size / 2; i >= 1; i--) {
//     sink(heap, i, size);
//   }

//   while (size > 1) {
//     swap(heap, 1, size);
//     size--;
//     sink(heap, 1, size);
//   }
// }

// function sink(heap: number[], parent: number, size: number) {
//   while (parent * 2 <= size) {
//     let maxChild = parent * 2;

//     if (maxChild + 1 <= size && less(heap, maxChild, maxChild + 1)) {
//       maxChild++;
//     }

//     if (!less(heap, parent, maxChild)) {
//       break;
//     }

//     swap(heap, parent, maxChild);

//     parent = maxChild;
//   }
// }

// function less(heap: number[], i: number, j: number): boolean {
//   return heap[i - 1] < heap[j - 1];
// }
