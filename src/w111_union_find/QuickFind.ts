interface UnionFind {
  union(p: number, q: number): void;
  connected(p: number, q: number): boolean;
  find(p: number): number;
  getCount(): number;
}

export class QuickFind implements UnionFind {
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
    let pid = this.id[p];
    let qid = this.id[q];

    for (let i = 0; i < this.id.length; i++) {
      if (this.id[i] == pid) {
        this.id[i] = qid;
      }
    }

    this.count--;
  }

  connected(p: number, q: number): boolean {
    return this.id[p] == this.id[q];
  }

  find(p: number): number {
    return this.id[p];
  }

  getCount(): number {
    return this.count;
  }
}
