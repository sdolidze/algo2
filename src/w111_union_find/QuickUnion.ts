import { UnionFind } from "./UnionFind";

export class QuickUnion implements UnionFind {
  private id: number[];
  private count: number;

  constructor(N: number) {
    this.id = new Array(N).fill(null);
    this.count = N;

    for (let i = 0; i < N; i++) {
      this.id[i] = i;
    }
  }

  union(p: number, q: number): void {
    this.id[this.find(p)] = q;
    this.count--;
  }

  connected(p: number, q: number): boolean {
    return this.find(p) === this.find(q);
  }

  find(p: number): number {
    while (p != this.id[p]) {
      p = this.id[p];
    }

    return p;
  }

  getCount(): number {
    return this.count;
  }
}
