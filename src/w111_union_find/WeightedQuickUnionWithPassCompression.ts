import { UnionFind } from "./UnionFind";

export class WeightedQuickUnionWithPassCompression implements UnionFind {
  private id: number[];
  private sz: number[];
  private count: number;

  constructor(N: number) {
    this.id = new Array(N).fill(null);
    this.sz = new Array(N).fill(null);
    this.count = N;

    for (let i = 0; i < N; i++) {
      this.id[i] = i;
      this.sz[i] = 0;
    }
  }

  union(p: number, q: number): void {
    let rootP = this.find(p);
    let rootQ = this.find(q);

    if (rootP == rootQ) {
      return;
    }

    if (this.sz[rootP] < rootQ) {
      this.id[rootP] = rootQ;
      this.sz[rootQ] += this.sz[rootP];
    } else {
      this.id[rootQ] = rootP;
      this.sz[rootP] += this.sz[rootQ];
    }

    this.count--;
  }

  connected(p: number, q: number): boolean {
    return this.find(p) == this.find(q);
  }

  find(p: number): number {
    while (p != this.id[p]) {
      this.id[p] = this.id[this.id[p]]; // pass compression, make p point to it's grandparent, halves path
      p = this.id[p];
    }

    return p;
  }

  getCount(): number {
    return this.count;
  }
}
