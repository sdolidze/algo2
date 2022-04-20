export interface UnionFind {
  union(p: number, q: number): void;
  connected(p: number, q: number): boolean;
  find(p: number): number;
  getCount(): number;
}
