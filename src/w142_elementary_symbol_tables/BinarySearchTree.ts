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

  public floor(key: string): bst.Node | null {
    return bst.floor(this.root, key);
  }

  public ceiling(key: string): bst.Node | null {
    return bst.ceiling(this.root, key);
  }

  public rank(key: string): number {
    return bst.rank(this.root, key);
  }

  public select(k: number): string | null {
    return bst.select(k);
  }

  public sizeRange(lo: string, hi: string): number {
    return bst.sizeRange(this.root, lo, hi);
  }

  public keys(lo: string, hi: string): string[] {
    return bst.keys(this.root, lo, hi);
  }

  public isEmpty(): boolean {
    return bst.isEmpty(this.root);
  }

  public size(): number {
    return bst.size(this.root);
  }

  public inOrder(keys: string[]): void {
    bst.inOrder(this.root, keys);
  }
}
