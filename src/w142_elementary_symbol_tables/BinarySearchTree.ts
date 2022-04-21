import * as bst from "./bst";

export class BinarySearchTree {
  private root: bst.Node;

  constructor() {
    this.root = null as any;
  }

  public put(key: string, value: string): void {
    this.root = bst.put(this.root, key, value);
  }

  public remove(key: string): void {
    this.root = bst.remove(this.root, key);
  }

  public removeMin(): void {
    this.root = bst.removeMin(this.root);
  }

  public removeMax(): void {
    this.root = bst.removeMax(this.root);
  }

  public get(key: string): string | null {
    return bst.get(this.root, key);
  }

  public contains(key: string): boolean {
    return bst.contains(this.root, key);
  }

  public min(): string | null {
    return bst.min(this.root)?.value ?? null;
  }

  public max(): string | null {
    return bst.max(this.root)?.value ?? null;
  }

  public floor(key: string): string | null {
    return bst.floor(this.root, key)?.value ?? null;
  }

  public ceiling(key: string): string | null {
    return bst.ceiling(this.root, key)?.value ?? null;
  }

  public rank(key: string): number {
    return bst.rank(this.root, key);
  }

  public sizeRange(lo: string, hi: string): number {
    return bst.sizeRange(this.root, lo, hi);
  }

  public keys(): string[] {
    const results: string[] = [];
    bst.keys(this.root, results);
    return results;
  }

  public keyRange(lo: string, hi: string): string[] {
    const results: string[] = [];
    bst.keyRange(this.root, results, lo, hi);
    return results;
  }

  public isEmpty(): boolean {
    return bst.isEmpty(this.root);
  }

  public size(): number {
    return bst.size(this.root);
  }
}
