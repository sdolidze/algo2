import { swap } from "./swap";

export function shuffle<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    let j = randomInt(0, i); // [0, i]
    swap(arr, i, j);
  }
}

// [min, max] <- both ends are inclusive
export function randomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
