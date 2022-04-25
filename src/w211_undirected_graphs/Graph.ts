export class Graph {
  private vertices: number[][];

  public constructor(numVertices: number) {
    this.vertices = new Array<number[]>(numVertices);

    for (let i = 0; i < this.vertices.length; i++) {
      this.vertices[i] = [];
    }
  }

  public addEdge(from: number, to: number): void {
    this.vertices[from].push(to);
    this.vertices[to].push(from);
  }

  public adjacent(vertex: number): number[] {
    return this.vertices[vertex];
  }

  public numVertices(): number {
    return this.vertices.length;
  }
}
