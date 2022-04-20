export function threeSumCubic(arr: number[]): number {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === 0) {
          count++;
        }
      }
    }
  }

  return count;
}

export function threeSumQuadratic(arr: number[]): number {
  arr.sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < arr.length - 2; i++) {
    let lo = i + 1;
    let hi = arr.length - 1;

    while (lo < hi) {
      let sum = arr[i] + arr[lo] + arr[hi];

      if (sum < 0) {
        lo++;
      } else if (sum > 0) {
        hi--;
      } else {
        count++;
        lo++;
      }
    }
  }

  return count;
}
